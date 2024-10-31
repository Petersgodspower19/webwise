import React from 'react';

function FeatureCard({ color, icon, heading }) {
  return (
    <div
      className="w-[350px] p-[10px] rounded-[8px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all text-black space-y-2 flex flex-col gap-2"
      style={{ backgroundColor: color }}
    >
      {icon}
      <h1 className='font-bold text-[20px]'>{heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore necessitatibus. Obcaecati dignissimos cumque quaerat laborum sunt totam accusamus ipsam. Nostrum odio ducimus voluptates laborum architecto, earum autem nisi.
      </p>
    </div>
  );
}

export default FeatureCard;