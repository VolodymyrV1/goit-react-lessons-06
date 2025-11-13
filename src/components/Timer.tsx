/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useState, useEffect} from "react";

// mount  setInterval > unmount clearInterval > mount setInterval

export default function Timer() {
    const [time, setTime] = useState(new Date());
    

    useEffect(() => {
        console.log("useEfect");
        
        setInterval(() => {
            console.log("interval");
            
          setTime(new Date());
        }, 1000);

    }, [])

    

  return <p>{time.toLocaleTimeString()}</p>;
}