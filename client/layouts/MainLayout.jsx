import React from 'react';

export const MainLayout = ({content, header}) => (
  <div>
      <header>
        {header}
      </header>
      <main>
        <div className='container'>
          {content}
        </div>
      </main>
  </div>
)
