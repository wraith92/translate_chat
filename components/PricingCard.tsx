import { Check, CheckIcon  } from 'lucide-react';
import CheckoutButton from './CheckoutButton';
import Link from 'next/link';
import React from 'react';

const tiers = [
  {
    name: 'Free',
    id: null,
    href: "#",
    priceMonthly: 0,
    description: 'Build your next project with Tailwind CSS and TypeScript.',
    features: [
      'Unlimited projects',
      'Unlimited collaborators',
      'Unlimited storage',
      'Unlimited support',
    ],
  },
  {
    name: 'Pro',
    id: 'si_OnlcsLNYbMVzV',
    href: '#',
    priceMonthly: "5.99",
    description: 'Premium features for teams and agencies.',
    features: [
      'All pro features',
      'Volume discounts',
      'Advanced reporting',
      'Customizable reports',
    ],
  }
];

function PricingCard({ redirect }: { redirect: boolean }) {
  return (
    <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className='flex flex-col rounded-3xl justify-between bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'
        >
          <div>
            <h3 id={tier.id + tier.name} className='text-base font-semibold leading-7 text-indigo-600'>
              {tier.name}
            </h3>
            <div className='mt-4 flex items-baseline gap-x-2 '>
              {tier.priceMonthly ? (
                <>
                  <span className='text-5xl font-bold tracking-tight text-gray-900'>
                    ${tier.priceMonthly}
                  </span>
                  <span className='text-base font-semibold leading-7 text-gray-600'>
                    /month
                  </span>
                </>
              ) : (
                <span className='text-5xl font-bold tracking-tight text-gray-900'>
                  Free
                </span>
              )}
            </div>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              {tier.description}
            </p>
            <ul
              role='list'
              className='mt-10 space-y-4 text-sm leading-6 text-gray-600'
            >
              {tier.features.map((feature) => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    className='h-6 w-5 flex-none text-indigo-600'
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {redirect ? (
            <Link 
            href='/register'
            className='mt-8 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer'>
             Get Started Today
              </Link>
          ) : (
            tier.id && 
              <CheckoutButton />
              )}
        </div>
      ))}
    </div>
  );
}

export default PricingCard;
