import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ViewTypeValue } from "../../types/ViewType"

interface ViewTypeState {
    value: ViewTypeValue
}

const initialState: ViewTypeState = {
    value: "list"
}

export const viewTypeSlice = createSlice({
    name: "viewType",
    initialState,
    reducers: {
        changeType: (state, action: PayloadAction<ViewTypeValue>) => {
            state.value = action.payload
        }
    }
})

export const { changeType } = viewTypeSlice.actions

export default viewTypeSlice.reducer