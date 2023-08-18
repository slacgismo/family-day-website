"use client"

/*

The Controller page is the core of the application. It has the "creator" element, which adds devices to the device list. This is where most state manipulation will happen.

When adding a device and before updating state, the system needs to:
Confirm ip address is correct. If failed query, it needs to display an error.
On success, if custom name field is an empty string, use the device's name. 
Then, it needs to query the remaining fields to populate initial state.
Then, run addDevice.

Each device module needs to "stream" the data from their respective IP and update their own state values. This needs a timer to minimize re-rendering. (Add update reducer for the module actions)

*/

import styles from '../controller.module.css'


import { addDevice } from '@/reducers/deviceList'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppDispatch, useAppSelector } from '@/store/store'
import { useSelector } from 'react-redux'
import ControllerGenerator from '../../modules/controller/generator'
import ControllerLoad from '../../modules/controller/load'
import ControllerStorage from '../../modules/controller/storage'
import Creator from './creator'

// *********** END OF IMPORTS ***********

interface FormErrors {
  device?: string;
  type?: string;
  ip?: string;
  customName?: string;
}


export default function Controller() {
  const [active, setActive] = useState(false)
  const [formData, setFormData] = useState({
    device: "",
    type: "",
    ip: "",
    customName: ""
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

    // State to manage the visibility of sections
    const [sectionVisibility, setSectionVisibility] = useState({
      Generator: true,
      Load: true,
      Storage: true
    });

// *********** END OF STATES ***********

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "type" && value === "Other") {
      setActive(true);
    } else if (name === "type" && value !== "Other" && active) {
      setActive(false);
      setFormData(prev => ({ ...prev, customName: "" }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateIP = (ip: string) => {
    // Use a basic regex pattern for IP validation
    const pattern = new RegExp(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    );
    return pattern.test(ip);
  };

  const handleButtonClick = () => {
    let errors: FormErrors = {};

    if (!formData.device || formData.device === "Select One") {
      errors.device = "Please select a device.";
    }
    if (!formData.type || formData.type === "Select One") {
      errors.type = "Please select a type.";
    }
    if (!validateIP(formData.ip)) {
      errors.ip = "Invalid IP address.";
    }
    if (formData.type === "Other" && !formData.customName) {
      errors.customName = "Custom name is required.";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Saving to State:", formData)
      setFormData({
        device: "",
        type: "",
        ip: "",
        customName: ""
      });
      setActive(false);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const toggleVisibility = (section: string) => {
    setSectionVisibility(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.controller}>
        <h1>Verify Data</h1>
        <Creator active={active} formData={formData} formErrors={formErrors} handleInputChange={handleInputChange} handleButtonClick={handleButtonClick} />
        
        <section className={styles.block}>
          <div className="controller-header">
            <h1>LOAD</h1>
            <button onClick={() => toggleVisibility('Load')}>{sectionVisibility.Load ? "-" : "+"}</button>
          </div>
          {sectionVisibility.Load && <ControllerLoad />}
        </section>
        
        <section className={styles.block}>
          <div className="controller-header">
            <h1>GENERATOR</h1>
            <button onClick={() => toggleVisibility('Generator')}>{sectionVisibility.Generator ? "-" : "+"}</button>
          </div>
          {sectionVisibility.Generator && <ControllerGenerator />}
        </section>

        <section className={styles.block}>
          <div className="controller-header">
            <h1>STORAGE</h1>
            <button onClick={() => toggleVisibility('Storage')}>{sectionVisibility.Storage ? "-" : "+"}</button>
          </div>
          {sectionVisibility.Storage && <ControllerStorage />}
        </section>
      </div>
    </div>
  )
}
