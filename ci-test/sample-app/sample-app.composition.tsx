import { MemoryRouter } from 'react-router-dom';
import { SampleApp } from "./sample-app.js";
    
export const SampleAppBasic = () => {
  return (
    <MemoryRouter>
      <SampleApp />
    </MemoryRouter>
  );
}