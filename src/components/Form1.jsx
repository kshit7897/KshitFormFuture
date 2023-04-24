import React, { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";


const MyForm = () => {
  const [formData, setFormData] = useState({
    deeds: "",
    partyType: "",
    companyType: "",
    companyName: "",
    nameGroup: "",
    accountGroup: "",
    code: "",
    KYC: "",
    currency: "",
    addressType: "",
    fullAdd: "",
    area:"",
    country:"",
    state:"",
    city:"",
    postalCode:"",
    phone:"",
    mobile:"",
phone2:"",
mobile2:"",
email:"",
businessRegNo:"",
expire:"",
TAX:"",
VAT:"",
other:"",
TM:"",
KYC_No:"",
KYC_Bank:"",
PAN:"",
GSTN_No:"",
QBC_No:"",
BDB_No:"",
terms:"",
ship_To:"",
logistic:"",
port_Discharge:"",
ref_Name:"",
limit_US:"",
comm:"",
invoice:"",
broker:"",

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // send jsonData to the server or do whatever you need to do with it
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <div className="div-one-company">
            <fieldset>
              <legend>Company</legend>
              <Row>
                <Col>
                  <Form.Group
                    controlId="deeds"
                    //  className="d-flex"
                  >
                    <Form.Label>Deeds</Form.Label>
                    <Form.Select
                      name="deeds"
                      value={formData.deeds}
                      onChange={handleChange}
                      placeholder="Select deeds"
                    >
                      <option value="">Select Deeds</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="partyType">
                    <Form.Label>Party Type</Form.Label>
                    <Form.Select
                      name="partyType"
                      value={formData.partyType}
                      onChange={handleChange}
                      placeholder="Select Party Type"
                    >
                      <option value="">Select Party Type</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Select
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Select Company Name"
                    >
                      <option value="">Select Company Name</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="div-one-inner">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="accountGroup">
                        <Form.Label>A/C Group</Form.Label>
                        <Form.Select
                          name="accountGroup"
                          value={formData.accountGroup}
                          onChange={handleChange}
                          placeholder="Select Account Group"
                        >
                          <option value="">Select Account Group</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="code">
                        <Form.Label>Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="code"
                          value={formData.code}
                          onChange={handleChange}
                          placeholder="Enter Code"
                        />
                      </Form.Group>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <Form.Group controlId="companyType">
                    <Form.Label>Company Type</Form.Label>
                    <Form.Select
                      name="companyType"
                      value={formData.companyType}
                      onChange={handleChange}
                      placeholder="Select Company Type"
                    >
                      <option value="">Select Company Type</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="nameGroup">
                    <Form.Label>Name Group</Form.Label>
                    <Form.Select
                      name="nameGroup"
                      value={formData.nameGroup}
                      onChange={handleChange}
                      placeholder="Select deeds"
                    >
                      <option value="">Select Name Group</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="KYC">
                    <Form.Label>KYC Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="KYC"
                      value={formData.KYC}
                      onChange={handleChange}
                      placeholder="Enter KYC Name"
                    />
                  </Form.Group>

                  <div className="div-second-inner">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="currency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Select
                          name="accountGroup"
                          value={formData.currency}
                          onChange={handleChange}
                          placeholder="Select Currency"
                        >
                          <option value="">Select Currency</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="Enter Code"
                        />
                      </Form.Group>
                    </Row>
                  </div>
                </Col>
              </Row>
            </fieldset>

            <div className="div-second-address">
              <fieldset>
                <legend>Address</legend>
                <Row>
                  <Col>
                    <Form.Group
                      controlId="addressType"
                      //  className="d-flex"
                    >
                      <Form.Label>Address type</Form.Label>
                      <Form.Select
                        name="addressType"
                        value={formData.addressType}
                        onChange={handleChange}
                        placeholder="Select Address type"
                      >
                        <option value="">Select Address Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="fullAdd">
                      <Form.Control
                        as="textarea"
                        name="fullAdd"
                        value={formData.fullAdd}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="area">
                      <Form.Label>Area</Form.Label>
                      <Form.Select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Select Area"
                      >
                        <option value="">Select Area</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                      </Form.Select>
                    </Form.Group>

                    <div className="div-one-inner">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Select Country"
                        >
                          <option value="">Select Country</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="Select State"
                        >
                          <option value="">Select State</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Select City"
                        >
                          <option value="">Select city</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                          type="number"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          placeholder="Enter Postal Code"
                        />
                      </Form.Group>

                      </Row>

                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="phone">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control
                          type="number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter Phone Number"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="mobile">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control
                          type="number"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter Mobile Number"
                        />
                      </Form.Group>
                      </Row>

                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="phone2">
                        <Form.Label>Phone No2.</Form.Label>
                        <Form.Control
                          type="number"
                          name="phone2"
                          value={formData.phone2}
                          onChange={handleChange}
                          placeholder="Enter Phone Number"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="mobile2">
                        <Form.Label>Mobile No2.</Form.Label>
                        <Form.Control
                          type="number"
                          name="mobile2"
                          value={formData.mobile2}
                          onChange={handleChange}
                          placeholder="Enter Mobile Number"
                        />
                      </Form.Group>
                      </Row>

                      <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Email"
                        />
                      </Form.Group>
                  </div>
                  </Col>


                  <Col>

                  
                    <div className="div-one-inner">

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="businessRegNo">
                        <Form.Label>Business Reg No.</Form.Label>
                        <Form.Control
                          type="text"
                          name="businessRegNo"
                          value={formData.businessRegNo}
                          onChange={handleChange}
                          placeholder="Enter Registered No."
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="expire">
                        <Form.Label>Expire date</Form.Label>
                        <Form.Control
                          type="date"
                          name="expire"
                          value={formData.expire}
                          onChange={handleChange}
                          placeholder="Enter Expire No."
                        />
                      </Form.Group>

                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="TAX">
                        <Form.Label>TAX ID</Form.Label>
                        <Form.Control
                          type="text"
                          name="TAX"
                          value={formData.TAX}
                          onChange={handleChange}
                          placeholder="Enter TAX ID"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="VAT">
                        <Form.Label>VAT No.</Form.Label>
                        <Form.Control
                          type="text"
                          name="VAT"
                          value={formData.VAT}
                          onChange={handleChange}
                          placeholder="Enter VAT No."
                        />
                      </Form.Group>
                  
                      </Row>

                      <Row className="mb-3">

                      <Form.Group as={Col} controlId="other">
                        <Form.Label>Other</Form.Label>
                        <Form.Control
                          type="text"
                          name="other"
                          value={formData.other}
                          onChange={handleChange}
                          placeholder="Enter Additional Detail"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="TM">
                        <Form.Label>TM No.</Form.Label>
                        <Form.Control
                          type="number"
                          name="TM"
                          value={formData.TM}
                          onChange={handleChange}
                          placeholder="Enter TM No."
                        />
                      </Form.Group>
                      
                      </Row>

                      <Row className="mb-3">
                  
                      <Form.Group as={Col} controlId="KYC_No">
                        <Form.Label>KYC No.</Form.Label>
                        <Form.Control
                          type="number"
                          name="KYC_No"
                          value={formData.KYC_No}
                          onChange={handleChange}
                          placeholder="Enter KYC No."
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="KYC_Bank">
                        <Form.Label>KYC Bank</Form.Label>
                        <Form.Control
                          type="text"
                          name="KYC_Bank"
                          value={formData.KYC_Bank}
                          onChange={handleChange}
                          placeholder="Enter KYC Bank"
                        />
                      </Form.Group>
                      </Row>

                      
                      <Row className="mb-3">
                  
                      <Form.Group as={Col} controlId="PAN_No">
                        <Form.Label>PAN No.</Form.Label>
                        <Form.Control
                          type="text"
                          name="PAN_No"
                          value={formData.PAN_No}
                          onChange={handleChange}
                          placeholder="Enter PAN No."
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="GSTN_No">
                        <Form.Label>GSTN No.</Form.Label>
                        <Form.Control
                          type="text"
                          name="GSTN_No"
                          value={formData.GSTN_No}
                          onChange={handleChange}
                          placeholder="Enter GSTN No."
                        />
                      </Form.Group>
                      </Row>

                      <Row className="mb-3">
                  
                      <Form.Group as={Col} controlId="QBC_No">
                        <Form.Label>QBC No.</Form.Label>
                        <Form.Control
                          type="text"
                          name="QBC_No"
                          value={formData.QBC_No}
                          onChange={handleChange}
                          placeholder="Enter QBC No."
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="BDB_No">
                        <Form.Label>BDB No.</Form.Label>
                        <Form.Control
                          type="text"
                          name="BDB_No"
                          value={formData.BDB_No}
                          onChange={handleChange}
                          placeholder="Enter BDB No."
                        />
                      </Form.Group>
                      </Row>

                      <Button variant="outline-success">Reference</Button>{' '}
                      <Button variant="outline-success">View Document</Button>{' '}
                      <Button variant="outline-success">Social Details</Button>{' '}
                      <Button variant="outline-success">Photos</Button>{' '}

                  </div>


                  </Col>


                </Row>
              </fieldset>

              <div className="div-third-Preferences">

              <fieldset>
              <legend>Preferences</legend>
              <Row>
                <Col>
                  <Form.Group
                    controlId="terms"
                    //  className="d-flex"
                  >
                    <Form.Label>Terms</Form.Label>
                    <Form.Select
                      name="terms"
                      value={formData.terms}
                      onChange={handleChange}
                      placeholder="Select Terms"
                    >
                      <option value="">Select Terms</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="ship_To">
                    <Form.Label>Ship To</Form.Label>
                    <Form.Select
                      name="ship_To"
                      value={formData.ship_To}
                      onChange={handleChange}
                      placeholder="Select Ship To."
                    >
                      <option value="">Select Ship To. </option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="logistic">
                    <Form.Label>Logistic</Form.Label>
                    <Form.Select
                      name="logistic"
                      value={formData.logistic}
                      onChange={handleChange}
                      placeholder="Select Logistic"
                    >
                      <option value="">Select Logistic</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="port_Discharge">
                    <Form.Label>Port Of Discharge</Form.Label>
                    <Form.Select
                      name="port_Discharge"
                      value={formData.port_Discharge}
                      onChange={handleChange}
                      placeholder="Select Port Of Discharge"
                    >
                      <option value="">Select Port Of Discharge</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="ref_Name">
                        <Form.Label>Ref. Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="ref_Name"
                          value={formData.ref_Name}
                          onChange={handleChange}
                          placeholder="Enter Ref. Name"
                        />
                      </Form.Group>

                </Col>

                <Col>
                <Form.Group as={Col} controlId="limit_US">
                        <Form.Label>Limit In (US-$)</Form.Label>
                        <Form.Control
                          type="text"
                          name="limit_US"
                          value={formData.limit_US}
                          onChange={handleChange}
                          placeholder="Enter Limit In ($)"
                        />
                      </Form.Group>

                      <Form.Group
                    controlId="final_destination">
                    <Form.Label>Final Destination</Form.Label>
                    <Form.Select
                      name="final_destination"
                      value={formData.final_destination}
                      onChange={handleChange}
                      placeholder="Select Final Destination"
                    >
                      <option value="">Select Final Destination</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>


                  <Form.Group
                    controlId="comm">
                    <Form.Label>Comm(%)</Form.Label>
                    <Form.Select
                      name="comm"
                      value={formData.comm}
                      onChange={handleChange}
                      placeholder="Select Comm(%)"
                    >
                      <option value="">Select Comm(%)</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="invoice">
                    <Form.Label>Invoice Pattern</Form.Label>
                    <Form.Select
                      name="invoice"
                      value={formData.invoice}
                      onChange={handleChange}
                      placeholder="Select Invoice Pattern"
                    >
                      <option value="">Select Invoice Pattern</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>


                  <Form.Group
                    controlId="broker">
                    <Form.Label>Broker Name</Form.Label>
                    <Form.Select
                      name="broker"
                      value={formData.broker}
                      onChange={handleChange}
                      placeholder="Select Broker Name"
                    >
                      <option value="">Select Broker Name</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Select>
                  </Form.Group>

                  {/* ------------------------------------------------------------------- */}

                  

               
                </Col>
              </Row>
            </fieldset>

              </div>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default MyForm;
