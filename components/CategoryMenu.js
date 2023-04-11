"use client";
import { Tab } from "@headlessui/react";

export default function CategoryMenu() {
  return (
    <div className="flex flex-col items-center">
      <Tab.Group>
        <Tab.List className="flex items-center gap-4">
          <Tab>All</Tab>
          <Tab>Oceans</Tab>
          <Tab>Mountains</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>All Photos</Tab.Panel>
          <Tab.Panel>Oceans</Tab.Panel>
          <Tab.Panel>Mountains</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
