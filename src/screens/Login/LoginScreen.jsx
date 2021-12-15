import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";

import React, { useState } from "react";
import { FormControl, FormLabel, Input, Grid, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/user-slice";
import { useHistory } from "react-router";

export default function LoginScreen() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				dispatch(userActions.setEmail({ email: userCredentials?.user?.email }));
				history.push("/");
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Flex justify="center" align="center">
			<Grid>
				<Box padding="1">
					<FormControl id="email" isRequired>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</FormControl>
				</Box>
				<Box padding="1">
					<FormControl id="password" isRequired>
						<FormLabel>Password</FormLabel>
						<Input
							type={"password"}
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</FormControl>
				</Box>
				<Box align="center" padding="10">
					<FormControl>
						<Button colorScheme="purple" onClick={login}>
							Log In
						</Button>
					</FormControl>
				</Box>
				<Box align="center">
					<Text padding="5"><strong>Are you new? Please register!</strong></Text>
					<FormControl>
						<Button colorScheme="purple" onClick={() => history.push("/register")}>
							Register
						</Button>
					</FormControl>
				</Box>
			</Grid>
		</Flex>
	);
}