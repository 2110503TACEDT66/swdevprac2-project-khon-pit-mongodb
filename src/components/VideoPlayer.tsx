'use client'
import { useRef } from "react"
import { useEffect } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";
export default function VideoPlayer({vdoSrc,isPlaying}:{vdoSrc:string,isPlaying:boolean})
{
    const vdoRef = useRef<HTMLVideoElement>(null);
    useWindowListener('contextmenu',(e)=>e.preventDefault());    
    useEffect(()=>{
        if(isPlaying){
            vdoRef.current?.play();
        }
        else{
            vdoRef.current?.pause();
        }
    }, [isPlaying])
    return(
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} muted loop controls/>
    )
}