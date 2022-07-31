import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Flex,
  Button,
  Text
} from "@chakra-ui/react";

export const ConfirmModal = ({ children, handleAction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex color="red" onClick={onOpen} flex={1}>{children}</Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Konfirmasi Aksi
          </ModalHeader>
          <ModalBody pb={6}>
            <Text>
              Kamu yakin ingin melakukan aksi ini?
            </Text>
          </ModalBody>
          <ModalFooter gap={4}>
            <Button bg="redLight" color="#FFFFFF" onClick={onClose}>
              Cancel
            </Button>
            <Button bg="darkCyan" color="#FFFFFF" onClick={() => {
              handleAction();
              onClose();
            }
            }>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}