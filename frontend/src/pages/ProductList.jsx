import React, { useEffect, useState } from "react";
import { Button, Spinner, IconButton } from "@material-tailwind/react";
import NavbarMenu from "../components/NavbarMenu.jsx";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import truncateProductName from "../helpers/truncateProductName.js";
import axiosProduct from "../helpers/api.js";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axiosProduct.get("/products");
      setData(response.data.products);
      setPageNum(response.data.pageNum);
      setLoading(false);
    })();
  }, []);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: async () => {
      setLoading(true);
      await axiosProduct
        .get(`/products?page=${index}`)
        .then((response) => {
          setActive(index);
          setData(response.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    },
  });
  const next = async () => {
    if (active === pageNum) return;
    setLoading(true);

    await axiosProduct
      .get(`/products?page=${active + 1}`)
      .then((response) => {
        setActive(active);
        setData(response.data.products);
        setActive(active + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const prev = async () => {
    if (active === 1) return;
    setLoading(true);
    await axiosProduct
      .get(`/products?page=${active - 1}`)
      .then((response) => {
        setActive(active);
        setData(response.data.products);
        setActive(active - 1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const items = [];
  for (let i = 1; i <= pageNum; i++) {
    items.push(<IconButton {...getItemProps(i)}>{i}</IconButton>);
  }
  return (
    <div className="bg-white">
      <NavbarMenu />
      {loading ? (
        <div className={"w-full flex justify-center mt-10"}>
          <Spinner className={"h-12 w-12"} />
        </div>
      ) : (
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.img}
                    alt={"image"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"#"}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.pName.length > 28
                          ? truncateProductName({ pName: product.pName })
                          : product.pName}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className={"flex justify-between"}>
                  <Button
                    className={
                      "flex justify-around items-center w-8/12 bg-gray-100 text-blue-gray-900"
                    }
                  >
                    Add to cart
                    <IoCart size={20} />
                  </Button>
                  <Button className={"w-3/12 bg-gray-100 text-blue-gray-900"}>
                    <FaHeart size={20} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">{items}</div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === pageNum}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
