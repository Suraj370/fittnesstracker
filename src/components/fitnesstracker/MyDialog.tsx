import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";
import { Cross2Icon } from "@radix-ui/react-icons";
import FitnessForm from "./Form";
import { FitnessData } from "./FitnessData";

const MyDialog = (  ) => {
  let [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className=" shadow-accent-9 hover:bg-accent-12 bg-accent-11 px-5 py-2 items-centerhover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px]   font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Add Exercise
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-accent-5 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow p-7 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-primary-9 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className=" text-accent-12 m-0 text-[17px] font-medium">
            Add exercise
          </Dialog.Title>
          <FitnessForm  afterSave={() => setOpen(false) } />

        
       
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default dynamic(() => Promise.resolve(MyDialog), { ssr: false });
