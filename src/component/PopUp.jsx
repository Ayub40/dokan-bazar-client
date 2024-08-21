import React from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Typography, Select, Option, } from "@material-tailwind/react";
import { Controller } from "react-hook-form";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
export function DialogDefault({
  onSubmit,
  register,
  handleSubmit,
  handleReset,
  control,
  handleOpen,
  open
}) {


  return (
    <>
      <Button
        className="flex items-center space-x-2 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white hover:bg-gray-800 transition duration-300"
        onClick={handleOpen}
      >
        <span>Filters</span>
        <CiFilter className="text-xl" />
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto relative"
      >
        <div className="absolute top-4 right-4">
          <button onClick={handleReset}>
            <GrPowerReset className="text-xl"/>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="text-2xl font-semibold text-gray-800">
            Find the Right Product
          </DialogHeader>
          <DialogBody className="space-y-4 ">

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex-1">
                <Controller
                  name="brand"
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <Select label="Brand" {...field} className="w-full">
                      <Option value="TechVision">TechVision</Option>
                      <Option value="StyleHub">StyleHub</Option>
                      <Option value="PowerPlay">PowerPlay</Option>
                      <Option value="RunFree">RunFree</Option>
                      <Option value="Innovate">Innovate</Option>
                      <Option value="Glamour">Glamour</Option>
                      <Option value="SoundWave">SoundWave</Option>
                      <Option value="UrbanWalk">UrbanWalk</Option>
                      <Option value="CaptureX">CaptureX</Option>
                      <Option value="HealthPlus">HealthPlus</Option>
                    </Select>
                  )}
                />
              </div>

              <div className="flex-1">
                <Controller
                  name="category"
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <Select label="Category" {...field} className="w-full">
                      <Option value="Smartphone">Smartphone</Option>
                      <Option value="Laptop">Laptop</Option>
                      <Option value="Camera">Camera</Option>
                      <Option value="Gaming Console">Gaming Console</Option>
                      <Option value="Home Appliance">Home Appliance</Option>
                      <Option value="Television">Television</Option>
                      <Option value="Tablet">Tablet</Option>
                      <Option value="Smart Speaker">Smart Speaker</Option>
                      <Option value="Smart Display">Smart Display</Option>
                      <Option value="Fitness Tracker">Fitness Tracker</Option>
                      <Option value="Action Camera">Action Camera</Option>
                      <Option value="Wireless Earbuds">Wireless Earbuds</Option>
                      <Option value="Monitor">Monitor</Option>
                      <Option value="Streaming Device">Streaming Device</Option>
                      <Option value="Speaker">Speaker</Option>
                      <Option value="Keyboard">Keyboard</Option>
                      <Option value="Smartwatch">Smartwatch</Option>
                      <Option value="Headset">Headset</Option>
                      <Option value="Storage">Storage</Option>
                      <Option value="Portable Charger">Portable Charger</Option>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <Typography className="text-lg font-semibold text-gray-800">
                Price Range
              </Typography>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-2">
              <div className="flex-1 w-full">
                <Typography className="mb-1 font-medium text-gray-700">
                  Min Price
                </Typography>
                <Input
                  {...register("minimum")}
                  size="lg"
                  placeholder="Min price (e.g., $10)"
                  className="w-full"
                />
              </div>
              <Typography className="text-gray-700 font-medium my-1">to</Typography>
              <div className="flex-1 w-full">
                <Typography className="mb-1 font-medium text-gray-700">
                  Max Price
                </Typography>
                <Input
                  {...register("maximum")}
                  size="lg"
                  placeholder="Max price (e.g., $1000)"
                  className="w-full"
                />
              </div>
            </div>
            {/* <Typography className="mt-4 text-sm text-gray-500">
              Tip: You can refine your search by providing more specific details.
            </Typography> */}
          </DialogBody>
          <DialogFooter className="flex justify-end space-x-2">
            <Button
              variant="text"
              // color=""
              onClick={handleOpen}
              className="mr-1 bg-gradient-to-r from-[#DD4802] to-[#E2875B]"
            >
              <span className="text-white">Cancel</span>
            </Button>
            <Button
              onClick={handleOpen}
              type="submit"
              variant="filled"
              color="green"
              className="bg-gradient-to-r from-[#835D23] to-[#B58130]"
            >
              <span>Find</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
