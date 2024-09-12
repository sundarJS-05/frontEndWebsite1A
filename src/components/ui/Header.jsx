import React from 'react'

import Image from 'next/image'



export default function Header() {
  return (
    <div>
      {/* first section */}
      <section className='flex items-center'>
        <img 
        className='h-24'
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADq6uotLS0yMjJvb2/Ozs6Hh4evr6/w8PDKyspGRka9vb3j4+P39/fg4OC3t7d1dXWlpaViYmIdHR3U1NR8fHz09PS6uroXFxeenp6xsbGSkpJOTk6CgoKpqalmZmYmJiaOjo48PDwNDQ1VVVVaWlo/Pz+ZmZmNNG6VAAAFyElEQVR4nO2abVfyMAyGLSoI8qpMRIQ5RB/+/y98GCRd2yUZgh70nPv6hDTpcnd9SSNXVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P10Lh3AT7Nwo0uH8MM4937pEH6WjnPu+dJB/CQtV2IYOKKvm6zI5O2bYzuCFj3aMPnYG7zqBm3qY6NaDHgQhqdHeirNCjn+rm7ySSYvmsGSDB7OCfVEmhVOyeKxuRPtFfWoeXperKfRqDDn6F2m99Ihk1u5eU7NvTODPYlGhV6guza6YRvx3Hyhxo9zgz2JJoVPlUJ3p3ezIBPp3Byyf+sb4v06DQoHLsTo54ZMhHNzQk0XSv0aFN5HCo0YM3UURlJLdzQanHBytHZuM7O5Pk9shX0XY8yzNzKpnZv/qGHBX7RX1/TVYx6HO74ryfkpWT+cEVnnndw+H4STa8wBTCdx5mEr3CQKjb1ixjbJ03mQeJ/K4z5vw0Gjg6ldfr4rp0+1rMfTyO1xED1kuIpa3fZYhS8uxdjvt/zw+Gv2PJw1g6LWZfDSb7xCGpd7jvKm5haumLtaaxCopXBWd7TO7FgL8RrpTmf9nmVdIb8SUtiT3P55t4nU7F+jpfBWcDTyrnQ+RoPUVQUGsZLC7IFbDgrbshs/501u5rlhKByJjsYOyHtKcG5G+89A7NBVqRAprAZir7CruR3mRX0pEf1Ghe+i35OusH4uxGdIwX/NX7JWd/BcDX4vUvgRK/Qn1mbb3rn1q6k1CgTsZvti1O2O8irsJoVjZWgGdVOmdrZHeYDv0M90v4EUsTkJKtzNVbAI/c2le9B8GOtHbvbL30+BdYNCRaDf3wTS/CzO5Qr6qx148MTupQrf9lZlP8vI5MDuLS8HUfybYPX412orfHUaxlU+ybHZY5+P8xwOzyo/JpNEYbUf8ypcRw+achDb8BEMv8W+pVBd3tZVPrknxXcq3iDlMYkVBmnAWHTzLMNHeGgtPlkK/fQW2KbGFeFdN7kX0wZxPbkN4ed0Q4WLoMeOKMFDHsuo1wltTu+GQr8JihjJb1CvSGob91pve7JAYTRJaAhy+XFDvUdWpSi8Nh21Ab0KV3lanyrMLnuBwmjJ0ZApi7+l92grFBK9CKMEzgnXiqccx2YPWqgwumP+kMIGgWYJPDH1h8vxszQ8TniWKvUFIXU+SmHHdCsZ6wrz2NInCJQObG6uBTbhThMppDmhpVL0lELqtFhqChtefX1EYorQroosb/aUFC5sN5rER5Q6w+8+XDNrrcPkKlB9zXn35GsKOcD4UvPGU4NPWf3iKigUb2M1jiiBu3iT55Q4qowvwi1EUuh3qHB3203d1eGTX4jR5tcJUgZBYVwv0DDmRZUPRRdmP3LBW+z4BFNVyNM0eE2HJX0XfHbhXlRm5lUJoK7QXz8bMErga7aJY1163/XeOaPcd2UqrEb8o1+mGgN/IZyWY1Od+UVe/j3rkWZOjGoKG7KEikJXyDvcZ/ytvrXnlkL5Ju74kq8UDnYBZrLCJ82hhlECp3Q5LT6qscY34ERhev54KHncKs3zmahQrTQI6AoPsdYLyIrELPSqK1QKFX785HX1TjfGVKGdecSs0kgqMmUEhsJJdO8TeU2htL0vgyuvdE/ww5soVCe1iF0CX4gNvaT0WQTHRaEprNJdYp7kqelb/qw26EThlwQGlc4aM/2fcVnH747zVVxc7ZSsxLx+mFdb8UQ434MC1f1LeFh3n/a90jvVFq2GUQJfS2/Ch5v1xuN+9tX/zYx6zzsvNddotfvj557505+GTL3O/IshXhypyG1ziZ8enIFdupC5wM9HzkAuctsYN4Xfh1bktvlLv+k7SaBVAv9trJvViBgl8N+FUeRu4NKRH4tV5LYxChoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD3+Q88XDlfryDGrgAAAABJRU5ErkJggg==">
        </img>

        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  p-6 m-4 h-5 transition-all">
          Avatar
        </div>

      </section>


      {/* secodn section */}
        
    </div>
  )
}
