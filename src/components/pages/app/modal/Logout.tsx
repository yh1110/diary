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
import React, { useContext } from "react";
import { authRepository } from "../../../../repositories/auth";
import { SessionContext } from "../../../../providers/SessionProvider";
import { Navigate } from "react-router-dom";

type LogoutProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Logout: React.FC<LogoutProps> = ({ isOpen, onClose }) => {
    const { currentUser, setCurrentUser } = useContext<any>(SessionContext);
    const signout = async () => {
        await authRepository.signout();
        setCurrentUser(null);
    };
    // console.log(typeof currentUser);
    if (currentUser == null) return <Navigate replace to="/login" />;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader> </ModalHeader>
            <Center>
                <Box textAlign="center" marginY="2xl">
                    <Text fontSize="lg">ログアウトしますか？</Text>
                </Box>
            </Center>
            <Flex marginBottom="md">
                <Box w="100%" marginY="md">
                    <Center>
                        <Button colorScheme="amber" onClick={signout}>
                            はい
                        </Button>
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
