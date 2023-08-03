import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page'
import { ReduxProvider } from '@/app/modules/provider';
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