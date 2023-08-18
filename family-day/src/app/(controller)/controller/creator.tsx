import React from 'react'

// *********** END OF IMPORTS ***********

interface FormData {
    device: string;
    type: string;
    ip: string;
    customName: string;
  }

interface FormErrors {
    device?: string;
    type?: string;
    ip?: string;
    customName?: string;
}

interface CreatorProps {
    active: boolean;
    formData: FormData;
    formErrors: FormErrors;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleButtonClick: () => void;
  }

// Arrays for dynamic options
const DEVICE_OPTIONS = ["Load", "Generator", "Storage"];
const TYPE_OPTIONS = ["Light", "Fan", "Other"];

const Creator: React.FC<CreatorProps> = ({ active, formData, formErrors, handleInputChange, handleButtonClick }) => {
  return (
    <div className="card-standard">
      <select name="device" value={formData.device} onChange={handleInputChange} className="input-standard top-el">
        <option value="">Select One</option>
        {DEVICE_OPTIONS.map(device => <option key={device} value={device}>{device}</option>)}
      </select>
      {formErrors.device && <span className="error-text">{formErrors.device}</span>}
      
      <input name="ip" value={formData.ip} onChange={handleInputChange} className="input-standard" placeholder='Device IP Address' />
      {formErrors.ip && <span className="error-text">{formErrors.ip}</span>}
      
      <select name="type" value={formData.type} onChange={handleInputChange} className="input-standard">
        <option value="">Select One</option>
        {TYPE_OPTIONS.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
      {formErrors.type && <span className="error-text">{formErrors.type}</span>}
      
      <input name="customName" value={formData.customName} onChange={handleInputChange} className="input-standard" disabled={!active} placeholder='Custom Name' />
      {formErrors.customName && <span className="error-text">{formErrors.customName}</span>}
      
      <div>
        <button className="button-standard bot-el" onClick={handleButtonClick}> ADD </button>
      </div>
    </div>
  );
}

export default Creator;
