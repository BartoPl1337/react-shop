import { SlidersHorizontal } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sorts = () => {
  return (
    <div>
      <div className="flex mx-16 my-2 font-semibold text-lg">
        <div className="flex-1">Air Max Dn (36)</div>
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-end items-center gap-10">
          <button className="flex gap-3 items-center">
            <span>Ukryj filtry</span>
            <SlidersHorizontal absoluteStrokeWidth={false} size={20} />
          </button>
          <Select>
            <SelectTrigger className="w-[132px] border-none font-semibold text-lg">
              <SelectValue placeholder="Sortuj wg" />
            </SelectTrigger>
            <SelectContent className="font-bold text-lg">
              <SelectItem value="Polecane">Polecane</SelectItem>
              <SelectItem value="Najnowsze">Najnowsze</SelectItem>
              <SelectItem value="Najwyzsza">Cena: od najwyższej</SelectItem>
              <SelectItem value="Najnizsza">Cena: od najniższej</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-6 mx-16">
        <div className=" mr-8">
          <div className="">
            <ScrollArea className="h-[700px]">
              <div className="flex flex-col space-y-1 font-semibold">
                <a href="">Air Max Dn</a>
                <a href="">Air Max 1</a>
                <a href="">Air Max 2</a>
                <a href="">Air Max 3</a>
                <a href="">Air Max 4</a>
                <a href="">Air Max 5</a>
                <a href="">Air Max 6</a>
                <a href="">Air Max 7</a>
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">Płeć</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mężczyzni
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Kobiety
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold  text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Uniseks
                      </label>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">Dzieci</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chłopcy
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Dziewczęta
                      </label>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl">Wiek dziecka</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Niemowlęta i maluchy (0-3 lata)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Małe dzieci (3-7 lat)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold  text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Duże dzieci (7-15 lat)
                      </label>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">Przeglądaj wg cen</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        399 zł - 599 zł
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Powyżej 599 zł
                      </label>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">Sporty</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Lifestyle
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label
                        htmlFor=""
                        className="font-semibold text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Taniec
                      </label>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

            </ScrollArea>
          </div>
        </div>
        <div className=" col-span-5">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
            <div className="bg-gray-500 h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
