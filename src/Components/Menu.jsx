import React from "react";
import {
  candy,
  chocolateChipWalnut,
  doubleChocolate,
  peanutButter,
  whiteChocolate,
  chocolateWhite,
  chocolate,
  vanilla,
  strawberry,
  mint,
  cream,
  pecan,
  cookiesCream,
} from "../Assets";

function Menu() {
  return (
    <div className="bg-white" id="menu">
      <div>
        <p className="text-5xl font-bold text-custom-red-dark text-center py-10">
          Cookies
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-1n">
        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={chocolateChipWalnut}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20 md:mb-0">
              Chocolate Chip Walnut
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={candy}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              M&M Chocolate Chip
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={doubleChocolate}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Double Chocolate Chip
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={peanutButter}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Peanut Butter
            </p>
          </div>
        </div>

        <div className="flex justify-center ">
          <div>
            <img
              className="md:h-[300px]"
              src={chocolateWhite}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-10">
              Chocolate White Chip
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={whiteChocolate}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              White Chocolate Chip
            </p>
          </div>
        </div>
      </div>

      {/* Ice Cream */}
      <div>
        <p className="text-5xl font-bold text-custom-red-dark text-center py-10">
          Ice Cream
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-1n">
        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={chocolate}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Chocolate
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={vanilla}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Vanilla
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={strawberry}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Stawberry
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={pecan}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Butter Pecan
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={mint}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Mint Chocolate Chip
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              className="md:h-[300px]"
              src={cookiesCream}
              alt="chocolate chip cookie"
            />
            <p className="text-2xl font-medium text-custom-red-dark text-center mt-1 mb-20">
              Cookies & Cream
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
