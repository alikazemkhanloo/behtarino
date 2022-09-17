import clsx from "clsx";
import { Component, PropsWithChildren } from "react";
import StarIcon from "../svgs/star.svg";

import { theme } from "../../tailwind.config";
interface Props {
  value: number;
  id?: string;
}

const Star: React.FC<Props> = ({ id, value }) => {
  return (
    <div className="flex items-center relative bg-white">
      {Array(5)
        .fill(0)
        .map((_, i) => {
          let percent;
          if (Math.floor(value) > i) {
            percent = 100;
          } else if (Math.floor(value) < i) {
            percent = 0;
          } else {
            percent = Math.floor((value - Math.floor(value)) * 10000) / 100;
          }

          console.log(value, i, percent);
          return (
            <div key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 576 512"
              >
                <defs>
                  <linearGradient
                    id={`gradient-${i}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop
                      offset={`${percent}%`}
                      // @ts-ignore
                      stop-color={theme.extend.colors.bc.accent1}
                    />
                    <stop offset={`${percent}%`} stop-color="grey" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#gradient-${i})`}
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </div>
          );
        })}
    </div>
  );
};
export default Star;
