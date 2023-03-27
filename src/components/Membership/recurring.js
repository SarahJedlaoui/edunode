import { useEffect, React } from "react";
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const ButtonWrapper = ({ type }) => {
	const [{ options }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                intent: "subscription",
            },
        });
    }, [type]);

	return (<PayPalButtons
		createSubscription={(data, actions) => {
			return actions.subscription
				.create({
					plan_id: "P-8HR49030NU824513AMJPMQFI",
				})
				.then((orderId) => {
					// Your code here after create the order
					return orderId;
				});
		}}
		style={{
			label: "subscribe",
		}}
	/>);
}

export default function Rec() {
	return (
		<PayPalScriptProvider
			options={{
				"client-id": "test",
				components: "buttons",
				intent: "subscription",
				vault: true,
			}}
		>
			<ButtonWrapper type="subscription" />
		</PayPalScriptProvider>
	);
}