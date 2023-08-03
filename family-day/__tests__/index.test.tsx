import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '@/app/homepage'
import { ReduxProvider } from '@/app/modules/provider';
import * as nextRouter from 'next/router';

describe('Homepage', () => {
    it('renders the Controller heading', () => {
      render(
        <ReduxProvider>
            <Homepage />
        </ReduxProvider> 
    )
  
      const heading = screen.getByRole('heading', {
        name: /Controller/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
  })