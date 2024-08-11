'use client'

import { accessToken } from "@/constants/storageKey"
import { useAppDispatch } from "@/redux/hooks"
import { fetchUser, setUser } from "@/redux/slices/userSlice"
import { getFromLocalStorage } from "@/utils/local-storage"
import { useEffect } from "react"

export default function Auth({ children }: { children: React.ReactNode | React.ReactElement }) {
    const dispatch = useAppDispatch()
    const token = getFromLocalStorage(accessToken) as string;
    useEffect(() => {
        //@ts-ignore
        if (token) {
            dispatch(fetchUser(token));
        }

    }, [token])
    return (
        <>
            {children}
        </>
    )
}