import { Accordion, Card } from 'react-bootstrap'
import Link from "next/link"

const Accordian = ({ list }) => {
    return (
        <>
            <Accordion defaultActiveKey="0">
                {list.map(element => {
                    return (
                        <Card key={element.id}>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <Link href={`/YellowGold/${element.name.replace(/ /g, "_")}`}>
                                    {element.name}
                                </Link>
                            </Accordion.Toggle>
                            {element.subProductCat.map(subcat => {
                                return (
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>{subcat.name}</Card.Body>

                                    </Accordion.Collapse>
                                )

                            })}

                        </Card>
                    )
                })}

            </Accordion>
        </>
    )
}

export default Accordian;
