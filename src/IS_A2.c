#include <pcap.h>
#include <netinet/ip.h>
#include <netinet/tcp.h>
#include <netinet/if_ether.h>

void process_packet(u_char *args, const struct pcap_pkthdr *header, const u_char *packet) {
    struct ethhdr *eth = (struct ethhdr *)packet;
    struct iphdr *iph = (struct iphdr *)(packet + ETH_HLEN);
    struct tcphdr *tcph=(struct tcphdr*)(packet + iph->ihl*4 + ETH_HLEN);

    printf("\nEthernet Header\n");
    printf("\t|-Source Address : %.2X-%.2X-%.2X-%.2X-%.2X-%.2X\n",eth->h_source[0],eth->h_source[1],eth->h_source[2],eth->h_source[3],eth->h_source[4],eth->h_source[5]);
    printf("\t|-Destination Address : %.2X-%.2X-%.2X-%.2X-%.2X-%.2X\n",eth->h_dest[0],eth->h_dest[1],eth->h_dest[2],eth->h_dest[3],eth->h_dest[4],eth->h_dest[5]);

    printf("\nIP Header\n");
    printf("\t|-Source IP : %s\n", inet_ntoa(source.sin_addr));
    printf("\t|-Destination IP : %s\n", inet_ntoa(dest.sin_addr));

    printf("\nTCP Header\n");
    printf("\t|-Source Port : %u\n", ntohs(tcph->source));
    printf("\t|-Destination Port : %u\n", ntohs(tcph->dest));

    unsigned char *data = (u_char *)(packet + iph->ihl*4 + ETH_HLEN + tcph->doff*4);

    int remaining_data = ntohs(iph->tot_len) - (iph->ihl*4 + tcph->doff*4);
    printf("\nPayload (%d bytes):\n", remaining_data);
    for(int i = 0; i < remaining_data; i++) {
        if(i != 0 && i%16 == 0) printf("\n");
        printf(" %.2X", data[i]);
    }
}

int main() {
    pcap_t *handle;
    char errbuf[PCAP_ERRBUF_SIZE];
    char *dev;

    dev = pcap_lookupdev(errbuf);
    if (dev == NULL) {
        printf("Device not found: %s\n", errbuf);
        return 1;
    }

    handle = pcap_open_live(dev, BUFSIZ, 1, 1000, errbuf);
    if (handle == NULL) {
        printf("Error opening device: %s\n", errbuf);
        return 1;
    }

    pcap_loop(handle, 0, process_packet, NULL);

    return 0;
}
