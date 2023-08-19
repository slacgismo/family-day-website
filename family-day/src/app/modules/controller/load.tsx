"use client"

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import configUtils from '@/utils/config';
import Switch from '@mui/material/Switch';
import { removeDevice } from '@/reducers/deviceList';
import { Devices } from '@/reducers/deviceList';
import Image from 'next/image';

export default function ControllerLoad({ device }: { device: Devices }) {
    const dispatch = useDispatch();

    const [deviceTitle, setDeviceTitle] = useState(device.name || "Unnamed Device");
    const [powerValues, setPowerValues] = useState({
        amps: device.amp || 0,
        watts: device.watt || 0,
        volts: device.volt || 0
    });
    const [isPoweredOn, setPoweredOn] = useState(device.poweredOn || false);

    useEffect(() => {

        const fetchPowerValues = async () => {
            const data = await configUtils.ipconfig(device.ip);
            setPowerValues(data);
        };

        // Fetch initial data
        fetchPowerValues();

        // Set the interval based on the power state
        const intervalDuration = isPoweredOn ? 1000 : 60000;
        const interval = setInterval(fetchPowerValues, intervalDuration);

        // Clear the interval when the component is unmounted or when the power state changes
        return () => clearInterval(interval);
    }, [device.ip, isPoweredOn]);

    const handleSwitchChange = async (e: { target: { checked: any; }; }) => {
        const newState = e.target.checked;
        setPoweredOn(newState);
        await configUtils.powerswitch(device.ip, newState);
    };

    const handleRemoveDevice = () => {
        dispatch(removeDevice(device.ip));
    };

    return (
        <div className="card-standard">
            <div className="controller-header">
                <h1>{deviceTitle}</h1>
                <Switch checked={isPoweredOn} onChange={handleSwitchChange} color="success" />
            </div>
            <div className="controller-values">
                <div className='controller-values'>Watts: <span className='input-standard '>{powerValues.watts}</span></div>
                <div className='controller-values'>Volts: <span className='input-standard '>{powerValues.volts}</span></div>
                <div className='controller-values'>Amps: <span className='input-standard '>{powerValues.amps}</span></div>
                <button onClick={handleRemoveDevice}>
                    <Image src="/trashcan.svg" alt="Delete" width="20" height="20" />
                </button>
            </div>
        </div>
    );
}
