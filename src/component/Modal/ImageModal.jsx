import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Image
} from "@chakra-ui/react";

export const ImageModal = ({ children, src, align }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        color="red"
        onClick={onOpen}
        flex={1}
        alignItems="center"
        justifyContent={align}
      >
        {children}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton bg="white" />
          <ModalBody>
            <Image src={src} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}