import { Dispatch } from 'redux'

import { IToggleFilter } from "stores/types/action"

export interface ISearchLayoutProps {
	onChange: (event: any) => any
	value?: string | number
	children: any
}

export interface ISearchLayoutStore {
    guide: {
        version: boolean
        isActive: boolean
    }
}

export interface ISearchLayoutDispatch {
	toggleFilter(): Dispatch<IToggleFilter>
}

export default interface ISearchLayout {
	props: ISearchLayoutProps
	store: ISearchLayoutStore
	dispatch: ISearchLayoutDispatch
}