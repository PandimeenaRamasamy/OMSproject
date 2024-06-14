import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css"; // Import the theme CSS
import "primereact/resources/primereact.min.css"; // Import PrimeReact CSS
import "primeicons/primeicons.css"; // Import PrimeIcons CSS
import "./CustomStepper.css"; // Import your custom CSS

export default function BasicDemo() {
  const stepperRef = useRef(null);

  return (
    <div className="card flex justify-content-center">
      <Stepper ref={stepperRef} style={{ flexBasis: "50rem" }}>
        <StepperPanel
          header={
            <div className="custom-header">
              <i className="pi pi-user"></i>
              <div>Header I</div>
            </div>
          }
        >
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content I
            </div>
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel
          header={
            <div className="custom-header">
              <i className="pi pi-calendar"></i>
              <div>Header II</div>
            </div>
          }
        >
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content II
            </div>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel
          header={
            <div className="custom-header">
              <i className="pi pi-check"></i>
              <div>Header III</div>
            </div>
          }
        >
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              Content III
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
