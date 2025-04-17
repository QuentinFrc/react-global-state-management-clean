'use client';

import React from "react";
import {scan} from "react-scan";

export const ReactScan = () => {
    React.useEffect(() => {
        scan({
            enabled: true,
        });
    }, []);

    return <></>;
}