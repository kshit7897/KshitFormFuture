import React, { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";

import "./form1.css";

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
    area: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    phone: "",
    mobile: "",
    phone2: "",
    mobile2: "",
    email: "",
    businessRegNo: "",
    expire: "",
    TAX: "",
    VAT: "",
    other: "",
    TM: "",
    KYC_No: "",
    KYC_Bank: "",
    PAN: "",
    GSTN_No: "",
    QBC_No: "",
    BDB_No: "",
    terms: "",
    ship_To: "",
    logistic: "",
    port_Discharge: "",
    ref_Name: "",
    limit_US: "",
    limit_RS: "",
    final_destination: "",
    business_Type: "",
    comm: "",
    invoice: "",
    broker: "",
    client_Type: "",
    buyer_Type: "",
    active_date: "",
    salesman1: "",
    salesman2: "",
    salesman3: "",
    communication1: "",
    communication2: "",
    communication3: "",
    id_1: "",
    id_2: "",
    id_3: "",
    designation: "",
    contact_name: "",
    contact_Mo: "",
    Local_Mo: "",
    add_contact: [],
    passport: "",
    dl_no: "",
    TAX_ID: "",
    aadhar: "",
    contact_PAN: "",
    view_documents: "",
    bankName: "",
    add_bank: "",
    branch: "",
    account_name: "",
    account_number: "",
    account_type: "",
    bank_currency: "",
    IFSC: "",
    swift: "",
    address_b: "",
    country_b: "",
    state_b: "",
    city_b: "",
    phone_b: "",
    zip_code: "",
    comments: "",
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
              <h3>Company</h3>
              <Row>
                <Col>
                  <Form.Group
                    controlId="deeds"
                     className="d-flex align-items-center justify-content-between mb-1"
                  >
                    <Form.Label className="px-3">Deeds</Form.Label>
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

                  <Form.Group className="d-flex align-items-center justify-content-between mb-1" controlId="partyType">
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

                  <Form.Group className="d-flex align-items-center justify-content-between mb-1" controlId="companyName">
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

                  {/* <div className="div-one-inner"> */}
                    {/* <Row className=" "> */}
                      <Form.Group className="d-flex align-items-center justify-content-between mb-1" as={Col} controlId="accountGroup">
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

                      <Form.Group className="d-flex align-items-center justify-content-between mb-1" as={Col} controlId="code">
                        <Form.Label>Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="code"
                          value={formData.code}
                          onChange={handleChange}
                          placeholder="Enter Code"
                        />
                      </Form.Group>
                    {/* </Row> */}
                  {/* </div> */}
                </Col>
                <Col>
                  <Form.Group className="d-flex align-items-center justify-content-between mb-1" controlId="companyType">
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

                  <Form.Group  className="d-flex align-items-center justify-content-between mb-1" controlId="nameGroup">
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

                  <Form.Group className="d-flex align-items-center justify-content-between mb-1" as={Col} controlId="KYC">
                    <Form.Label>KYC Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="KYC"
                      value={formData.KYC}
                      onChange={handleChange}
                      placeholder="Enter KYC Name"
                    />
                  </Form.Group>

                  {/* <div className="div-second-inner">
                    <Row className=" "> */}
                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1 mb-1" as={Col} controlId="currency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Select
                          name="currency"
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

                      <Form.Group  className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="Enter Code"
                        />
                      </Form.Group>
                    {/* </Row>
                  </div> */}
                </Col>
              </Row>
            </fieldset>

            <div className="div-second-address">
              <fieldset>
                <h3 className="mt-5">Address</h3>
                <Row>
                  <Col>
                    <Form.Group className=" d-flex align-items-center justify-content-between mb-1"
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

                    <Form.Group className="d-flex align-items-end justify-content-between mb-1" controlId="fullAdd">
                    <Form.Label></Form.Label>

                      <Form.Control
                        as="textarea"
                        name="fullAdd"
                        value={formData.fullAdd}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="area">
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
                    <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Email"
                        />
                      </Form.Group>
                    <div className="div-one-inner">
                      <Row className="">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="country">
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

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="state">
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
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="city">
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

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="postalCode">
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

                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="phone">
                          <Form.Label>Phone No.</Form.Label>
                          <Form.Control
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="mobile">
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

                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="phone2">
                          <Form.Label>Phone No2.</Form.Label>
                          <Form.Control
                            type="number"
                            name="phone2"
                            value={formData.phone2}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="mobile2">
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

                      
                    </div>
                  </Col>

                  <Col>
                    <div className="div-one-inner">
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="businessRegNo">
                          <Form.Label>Business Reg No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="businessRegNo"
                            value={formData.businessRegNo}
                            onChange={handleChange}
                            placeholder="Enter Registered No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="expire">
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
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="TAX">
                          <Form.Label>TAX ID</Form.Label>
                          <Form.Control
                            type="text"
                            name="TAX"
                            value={formData.TAX}
                            onChange={handleChange}
                            placeholder="Enter TAX ID"
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="VAT">
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
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="other">
                          <Form.Label>Other</Form.Label>
                          <Form.Control
                            type="text"
                            name="other"
                            value={formData.other}
                            onChange={handleChange}
                            placeholder="Enter Additional Detail"
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="TM">
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
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="KYC_No">
                          <Form.Label>KYC No.</Form.Label>
                          <Form.Control
                            type="number"
                            name="KYC_No"
                            value={formData.KYC_No}
                            onChange={handleChange}
                            placeholder="Enter KYC No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="KYC_Bank">
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
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="PAN_No">
                          <Form.Label>PAN No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="PAN_No"
                            value={formData.PAN_No}
                            onChange={handleChange}
                            placeholder="Enter PAN No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="GSTN_No">
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
                      <Row className=" ">
                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="QBC_No">
                          <Form.Label>QBC No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="QBC_No"
                            value={formData.QBC_No}
                            onChange={handleChange}
                            placeholder="Enter QBC No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="BDB_No">
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
                      <Button variant="outline-success">Reference</Button>{" "}
                      <Button variant="outline-success">View Document</Button>{" "}
                      <Button variant="outline-success">Social Details</Button>{" "}
                      <Button variant="outline-success">Photos</Button>{" "}
                    </div>
                  </Col>
                </Row>
              </fieldset>
              <div className="div-third-Preferences mt-5">
                <fieldset>
                  <h3>Preferences</h3>
                  <Row>
                    <Col>
                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1"
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

                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="ship_To">
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

                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="logistic">
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

                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="port_Discharge">
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

                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="ref_Name">
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
                      <div className="div-second-inner">
                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="limit_US">
                            <Form.Label>Limit In (US-$)</Form.Label>
                            <Form.Control
                              type="number"
                              name="limit_US"
                              value={formData.limit_US}
                              onChange={handleChange}
                              placeholder="Enter Limit In ($)"
                            />
                          </Form.Group>

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="limit_RS">
                            <Form.Label>Limit In (RS.)</Form.Label>
                            <Form.Control
                              type="number"
                              name="limit_RS"
                              value={formData.limit_RS}
                              onChange={handleChange}
                              placeholder="Enter Limit In (RS.)"
                            />
                          </Form.Group>
                        </Row>

                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="final_destination">
                            <Form.Label>Final Destination</Form.Label>
                            <Form.Select
                              name="final_destination"
                              value={formData.final_destination}
                              onChange={handleChange}
                              placeholder="Select Destination"
                            >
                              <option value="">Select Destination</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="business_Type">
                            <Form.Label>Business Type </Form.Label>
                            <Form.Select
                              name="business_Type"
                              value={formData.business_Type}
                              onChange={handleChange}
                              placeholder="Select Business Type"
                            >
                              <option value="">Select Business Type</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>

                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="comm">
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

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="client_Type">
                            <Form.Label>Client Type </Form.Label>
                            <Form.Select
                              name="client_Type"
                              value={formData.client_Type}
                              onChange={handleChange}
                              placeholder="Select Client Type"
                            >
                              <option value="">Select Client Type</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>

                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="invoice">
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

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="buyer_Type">
                            <Form.Label>Buyer Type </Form.Label>
                            <Form.Select
                              name="buyer_Type"
                              value={formData.buyer_Type}
                              onChange={handleChange}
                              placeholder="Select Buyer Type"
                            >
                              <option value="">Select Buyer Type</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>

                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="broker">
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

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="active_date">
                            <Form.Label>Active Date</Form.Label>
                            <Form.Control
                              type="date"
                              name="active_date"
                              value={formData.active_date}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  {/* ------------------------------------------------------- */}

                  <Row>
                    <Col>
                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="salesman1">
                        <Form.Label>Salesman Name 1</Form.Label>
                        <Form.Select
                          name="salesman1"
                          value={formData.salesman1}
                          onChange={handleChange}
                          placeholder="Select Salesman 1"
                        >
                          <option value="">Select Salesman</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="salesman2">
                        <Form.Label>Salesman Name 2</Form.Label>
                        <Form.Select
                          name="salesman2"
                          value={formData.salesman2}
                          onChange={handleChange}
                          placeholder="Select Salesman 2"
                        >
                          <option value="">Select Salesman</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="salesman3">
                        <Form.Label>Salesman Name 3</Form.Label>
                        <Form.Select
                          name="salesman3"
                          value={formData.salesman3}
                          onChange={handleChange}
                          placeholder="Select Salesman 3"
                        >
                          <option value="">Select Salesman</option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col>
                      <div className="div-second-inner">
                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="communication1">
                            <Form.Label>Communication way 1</Form.Label>
                            <Form.Select
                              name="communication1"
                              value={formData.communication1}
                              onChange={handleChange}
                              placeholder="Select Communication 1"
                            >
                              <option value="">Select Communication</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="id_1">
                            <Form.Label>ID 1</Form.Label>
                            <Form.Control
                              type="text"
                              name="id_1"
                              value={formData.id_1}
                              onChange={handleChange}
                              placeholder="Enter ID"
                            />
                          </Form.Group>
                        </Row>

                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="communication2">
                            <Form.Label>Communication way 2</Form.Label>
                            <Form.Select
                              name="communication2"
                              value={formData.communication2}
                              onChange={handleChange}
                              placeholder="Select Communication 2"
                            >
                              <option value="">Select Communication</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="id_2">
                            <Form.Label>ID 2</Form.Label>
                            <Form.Control
                              type="text"
                              name="id_2"
                              value={formData.id_2}
                              onChange={handleChange}
                              placeholder="Enter ID"
                            />
                          </Form.Group>
                        </Row>

                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="communication3">
                            <Form.Label>Communication way 3</Form.Label>
                            <Form.Select
                              name="communication3"
                              value={formData.communication3}
                              onChange={handleChange}
                              placeholder="Select Communication 3"
                            >
                              <option value="">Select Communication</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="id_3">
                            <Form.Label>ID 3</Form.Label>
                            <Form.Control
                              type="text"
                              name="id_3"
                              value={formData.id_3}
                              onChange={handleChange}
                              placeholder="Enter ID"
                            />
                          </Form.Group>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </fieldset>

                <div className="div-four-contact pt-5">
                  <fieldset>
                    {/* <legend>Contect</legend> */}
                    <Row>
                      <Col >
                      <h3>Contact</h3>
                      <Row>
                      <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="add_contact">
                            <Form.Label>Add Your Contact</Form.Label> 
                            <Button
                              variant="primary"
                              name="add_contact"
                              value={formData.add_contact}
                              onChange={handleChange}
                            >
                              + Add Contact
                            </Button>
                          </Form.Group>
                      </Row>
                        <Row className=" ">
                          <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Select
                              name="designation"
                              value={formData.designation}
                              onChange={handleChange}
                              placeholder="Select Designation"
                            >
                              <option value="">Select Designation</option>
                              <option value="type1">Type 1</option>
                              <option value="type2">Type 2</option>
                              <option value="type3">Type 3</option>
                            </Form.Select>
                          </Form.Group>

                        </Row>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="contact_name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="contact_name"
                            value={formData.contact_name}
                            onChange={handleChange}
                            placeholder="Enter Name"
                          />
                        </Form.Group>

                        <Form.Group  className=" d-flex align-items-center justify-content-between mb-1" controlId="contact_Mo">
                          <Form.Label>Mobile No.</Form.Label>
                          <Form.Control
                            type="number"
                            name="contact_Mo"
                            value={formData.contact_Mo}
                            onChange={handleChange}
                            placeholder="Enter Mo."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="Local_Mo">
                          <Form.Label>Local Mobile No.</Form.Label>
                          <Form.Control
                            type="number"
                            name="Local_Mo"
                            value={formData.Local_Mo}
                            onChange={handleChange}
                            placeholder="Enter Local Mobile No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="contact_email">
                          <Form.Label>Email ID</Form.Label>
                          <Form.Control className=" d-flex align-items-center justify-content-between mb-1"
                            type="email"
                            name="contact_email"
                            value={formData.contact_email}
                            onChange={handleChange}
                            placeholder="Enter Email ID"
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="passport">
                          <Form.Label>Passport No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="passport"
                            value={formData.passport}
                            onChange={handleChange}
                            placeholder="Enter Passport No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="dl_no">
                          <Form.Label>Driving Licence No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="dl_no"
                            value={formData.dl_no}
                            onChange={handleChange}
                            placeholder="Enter Driving Licence No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="TAX_ID">
                          <Form.Label>TAX ID</Form.Label>
                          <Form.Control
                            type="text"
                            name="TAX_ID"
                            value={formData.TAX_ID}
                            onChange={handleChange}
                            placeholder="Enter TAX ID"
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="aadhar">
                          <Form.Label>Aadhar no.</Form.Label>
                          <Form.Control
                            type="number"
                            name="aadhar"
                            value={formData.aadhar}
                            onChange={handleChange}
                            placeholder="Enter Aadhar No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" controlId="contact_PAN">
                          <Form.Label>PAN No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="contact_PAN"
                            value={formData.contact_PAN}
                            onChange={handleChange}
                            placeholder="Enter PAN No."
                          />
                        </Form.Group>

                        <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="view_documents">
                          <Form.Label>View Contact Documents</Form.Label>
                          <Button
                            variant="outline-success"
                            name="view_documents"
                            value={formData.view_documents}
                            onChange={handleChange}
                          >
                            View Documents
                          </Button>
                        </Form.Group>
                      </Col>
                      <Col>
                        <fieldset>
                          <h3>Bank Details</h3>
                          <div className="div-one-inner">
                            <Row>
                            <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="add_bank">
                                <Form.Label>Add Your Bank</Form.Label>
                                <Button
                                  variant="primary"
                                  name="add_bank"
                                  value={formData.add_bank}
                                  onChange={handleChange}
                                >
                                  + Add Bank
                                </Button>
                              </Form.Group>
                            </Row>
                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="bankName">
                                <Form.Label>Banks Name</Form.Label>
                                <Form.Select
                                  name="bankName"
                                  value={formData.bankName}
                                  onChange={handleChange}
                                  placeholder="Select Bank"
                                >
                                  <option value="">Select Bank</option>
                                  <option value="type1">Type 1</option>
                                  <option value="type2">Type 2</option>
                                  <option value="type3">Type 3</option>
                                </Form.Select>
                              </Form.Group>

                              
                            </Row>

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="branch">
                                <Form.Label>Branch Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="branch"
                                  value={formData.branch}
                                  onChange={handleChange}
                                  placeholder="Enter Branch Name"
                                />
                              </Form.Group>
                            </Row>

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="account_name">
                                <Form.Label>A/c Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="account_name"
                                  value={formData.account_name}
                                  onChange={handleChange}
                                  placeholder="Enter A/c Name"
                                />
                              </Form.Group>
                            </Row>

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="account_number">
                                <Form.Label>A/c Number</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="account_number"
                                  value={formData.account_number}
                                  onChange={handleChange}
                                  placeholder="Enter A/c Number"
                                />
                              </Form.Group>
                            </Row>

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="address_b">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  name="address_b"
                                  value={formData.address_b}
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Row>
                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="account_type">
                                <Form.Label>Type Of Account</Form.Label>
                                <Form.Select
                                  name="account_type"
                                  value={formData.account_type}
                                  onChange={handleChange}
                                  placeholder="account_type"
                                >
                                  <option value="">Select Account Type</option>
                                  <option value="type1">Type 1</option>
                                  <option value="type2">Type 2</option>
                                  <option value="type3">Type 3</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="bank_currency">
                                <Form.Label>Currency</Form.Label>
                                <Form.Select
                                  name="bank_currency"
                                  value={formData.bank_currency}
                                  onChange={handleChange}
                                  placeholder="Select Currency"
                                >
                                  <option value="">Select Currency</option>
                                  <option value="type1">Type 1</option>
                                  <option value="type2">Type 2</option>
                                  <option value="type3">Type 3</option>
                                </Form.Select>
                              </Form.Group>
                            </Row>

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="IFSC">
                                <Form.Label>IFSC</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="IFSC"
                                  value={formData.IFSC}
                                  onChange={handleChange}
                                  placeholder="Enter IFSC No."
                                />
                              </Form.Group>

                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="swift">
                                <Form.Label>Swift</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="swift"
                                  value={formData.swift}
                                  onChange={handleChange}
                                  placeholder="Enter Swift"
                                />
                              </Form.Group>
                            </Row>


                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="country_b">
                                <Form.Label>Country</Form.Label>
                                <Form.Select
                                  name="country_b"
                                  value={formData.country_b}
                                  onChange={handleChange}
                                  placeholder="Select Country"
                                >
                                  <option value="">Select Country</option>
                                  <option value="type1">Type 1</option>
                                  <option value="type2">Type 2</option>
                                  <option value="type3">Type 3</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="state_b">
                                <Form.Label>State</Form.Label>
                                <Form.Select
                                  name="state_b"
                                  value={formData.state_b}
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

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="city_b">
                                <Form.Label>City</Form.Label>
                                <Form.Select
                                  name="city_b"
                                  value={formData.city_b}
                                  onChange={handleChange}
                                  placeholder="Select City"
                                >
                                  <option value="">Select city</option>
                                  <option value="type1">Type 1</option>
                                  <option value="type2">Type 2</option>
                                  <option value="type3">Type 3</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="phone_b">
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="phone_b"
                                  value={formData.phone_b}
                                  onChange={handleChange}
                                  placeholder="Enter Phone No."
                                />
                              </Form.Group>
                            </Row>

                            <Row className=" ">
                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="zip_code">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="zip_code"
                                  value={formData.zip_code}
                                  onChange={handleChange}
                                  placeholder="Enter Zip Code"
                                />
                              </Form.Group>

                              <Form.Group className=" d-flex align-items-center justify-content-between mb-1" as={Col} controlId="IBAN_No">
                                <Form.Label>IBAN No.</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="IBAN_No"
                                  value={formData.IBAN_No}
                                  onChange={handleChange}
                                  placeholder="Enter IBAN No."
                                />
                              </Form.Group>
                            </Row>
                          </div>
                        </fieldset>
                      </Col>
                    </Row>
                    <Form.Group className=" d-flex align-items-center mb-1 mt-3" as={Col} controlId="comments">
                      <Form.Label className="mx-2">Comments</Form.Label>
                      <Form.Control
                        type="text"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Write Comments"
                      />
                    </Form.Group>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="px-5 btnn mt-3 mb-5">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default MyForm;
