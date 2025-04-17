'use client'


import {useCounter} from "@/application/hooks/useCounter";
import {Button} from "@/ui/components/ui/button";

export const Counter1 = () => {
    const {count, incr, decr} = useCounter()

    return (
        <div>
            <div className="text-xl font-mono">
                Count1: {count} from store
            </div>
            <div className={'grid gap-1 grid-cols-2'}>
                <Button variant={'secondary'} onClick={incr}>
                    Increment Count
                </Button>
                <Button variant={'secondary'} onClick={decr}>
                    Decrement Count
                </Button>
            </div>
        </div>
    )
}
