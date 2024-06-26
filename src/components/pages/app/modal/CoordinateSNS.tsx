import {
    Box,
    Button,
    Center,
    Flex,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Text,
} from "@yamada-ui/react";
import React from "react";

type CoordinateSNSProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const CoordinateSNS: React.FC<CoordinateSNSProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader> </ModalHeader>
            <Center>
                <Box textAlign="center" marginY="2xl">
                    <Text fontSize="lg">SNS連携を解除しますか？</Text>
                </Box>
            </Center>
            <Flex marginBottom="md">
                <Box w="100%" marginY="md">
                    <Center>
                        <Button colorScheme="amber">はい</Button>
                    </Center>
                </Box>
                <Box w="100%" marginY="md">
                    <Center>
                        <Button onClick={onClose}>いいえ</Button>
                    </Center>
                </Box>
            </Flex>
        </Modal>
    );
};
