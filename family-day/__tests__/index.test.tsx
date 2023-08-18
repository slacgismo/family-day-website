import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/app/page'
import { ReduxProvider } from '../src/app/modules/provider';
import * as nextRouter from 'next/router';

describe('Home', () => {
    it('renders the Controller heading', () => {
      render(
        <ReduxProvider>
            <Home />
        </ReduxProvider> 
    )
  
      const heading = screen.getByRole('heading', {
        name: /Controller/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
  })