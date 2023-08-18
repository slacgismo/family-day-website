"use client"

import axios from "axios"

// this file is intended to contain general utility functions
// post http://198.129.116.252 
// Json body example {"id":0,"method":"Switch.Set","params":{"id":0,"on":false}}
// apower in watts, current in amps, and voltage in volts
const configUtils = {
    ipconfig: async (ipaddr: string): Promise<{ amps: number, watts: number, volts: number }> => {
        let ret: { amps: number, watts: number, volts: number } = {
            amps: 0,
            watts: 0,
            volts: 0
        }
        
        try {
            const res = await axios.get(`http://${ipaddr}/rpc/Switch.GetStatus?id=0`);
            ret = {
                amps: res.data.current, 
                watts: res.data.apower, 
                volts: res.data.voltage
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        
        return ret;
    },

    powerswitch: async (ipaddr: string, status: boolean) => {
        const jbody = {
            "id":0,
            "method":"Switch.Set",
            "params":{
                "id":0,
                "on":status}
            }

        const res = await axios.post(`http://${ipaddr}/rpc`, jbody)
            .then(res => { if(res.data.result.was_on === !status) {
                return status;
            } 
        })
            .catch(err => {
                console.error(err)
                return err;
            })
    }
}
export default configUtils;