import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure
} from "@nextui-org/react";
import React from "react";

type Props = {
  text: string;
  data: any;
  setData: any;
};

const CreateModal = ({
    text,
  data,
  setData,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleAddData = (type: "normal", index?: number) => {
    if (typeof index !== "undefined") {
      setData((prev: any) => {
        (prev[index] as string[]).push("");
        return [...prev];
      });
    } else {
      setData((prev: any) => [...prev, ""]);
    }
  };

  const handleOnChange = (index: number, value: string) => {
    setData((prev: any) => {
      prev[index] = value;
      return [...prev];
    });
  };

  const handleDelete = (index: number) => {
    setData((prev: any) => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  return (
    <><Button onPress={onOpen}>เพิ่ม{text}</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>เพิ่ม{text}</ModalHeader>
            <ModalBody>
              {data.map((value: any, index: number) => {
                return (
                  <div className="inline-flex gap-2" key={index}>
                    <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      aria-label="Delete"
                      onPress={() => handleDelete(index)}
                    >
                      <XMarkIcon />
                    </Button>
                    <Input
                      onValueChange={(changedValue) =>
                        handleOnChange(index, changedValue)
                      }
                      value={value}
                      placeholder="เงื่อนไข"
                    />
                  </div>
                );
              })}

              <Button color="primary" onPress={() => handleAddData("normal")}>
                เพิ่มเงื่อนไขเดี่ยว
              </Button>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onPress={onClose}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal></>
  );
};

export default CreateModal;
