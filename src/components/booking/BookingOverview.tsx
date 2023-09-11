import {Button, Result} from "antd";

interface BookingOverviewProps {
    bookingSuccessful: boolean;
}

const BookingOverview = (props: BookingOverviewProps) => {
    return (
        <div className={"pt-6"}>
            { props.bookingSuccessful &&
                <div>
                    <Result
                        status="success"
                        title="Reservierung wurde erfolgreich durchgeführt!"
                        subTitle="Sie erhalten in wenigen Minuten eine Bestätigung Ihrer Reservierung. Wir freuen uns auf Sie!"
                        extra={[
                            <Button key="console" href={"/"}>
                                Zur Startseite
                            </Button>
                        ]}
                    />
                </div>
            }
        </div>
    );
}

export default BookingOverview;