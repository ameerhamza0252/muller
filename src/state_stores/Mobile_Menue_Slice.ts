import { createSlice } from '@reduxjs/toolkit'

const initialState={opened:false}

const mobileMenue=createSlice({
    name:'mobile_menu_state',
    initialState,
    reducers:{
        menue_opened(state){
            state.opened=true;
        },
        menue_closed(state){
            state.opened=false;
        },
        mobile_state_toggle(state){
            state.opened=!state.opened;
        }
    }
})

export const {menue_opened,menue_closed,mobile_state_toggle}=mobileMenue.actions
export default mobileMenue.reducer;