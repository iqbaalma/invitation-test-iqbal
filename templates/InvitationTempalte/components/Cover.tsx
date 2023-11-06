// FixedPage.tsx
import React from 'react';

const FixedPage: React.FC = () => {
  return (
    <div className="w-[65%] scale-100 h-screen bg-fixed bg-center bg-cover border border-r-8 border-zinc-300" style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg)' }}>
      <div className="w-full ps-10 pt-10 h-full bg-opacity-10 bg-black flex flex-col align-baseline justify-start gap-7">
        <h1 className="text-2xl font-general text-amber-900">THE WEDDING OF</h1>
        <p className="text-6xl font-name text-amber-900">Nailal & Via</p>
        <p className="text-[14px] font-bold max-w-sm font-general italic text-amber-900">“And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.”
        <br/>
        — Elizabeth Young
        </p>
      </div>
    </div>
  );
};

export default FixedPage;
