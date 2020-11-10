import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import logo from './assets/amazon.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import './style.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const General = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const [products] = useState([
        
        {
            name: 'iPhone 12',
            cost: '900$',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFhUWFRUXEBYXFxYVGBUYFRUXFxUXFxUYHiggGBolHRgVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0mHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYIAgf/xABLEAACAQIBBQgOBgkDBQAAAAAAAQIDBBEFITFRcQYHEkFhcrGyExQiMjM1U3OBkZKhwdEXUlRik9IVI0JDY6Oz4fA0dIIWJaLC0//EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAzEQEAAgECBQEGBQQCAwAAAAAAAQIRAzEEEiEyURMUM0FSYXEiI4GR8AVCQ6Gx8RU0wf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmc0k22klpbzJbWBrd3u/yZTbUrym2tPA4VT+mmdI0rz8FJ1Kx8Ud75eSvtX8qv+Qn0b+EerTyfSXkr7V/Kr/kHoX8HrU8n0l5K+1fyq/5B6F/B6tPJ9JmSvtX8qv+QejfwetTyfSZkrDHtrNr7DX/APmJ0bx/3BGrWVt76mR/tsfw635Cvpz9P3hPPH8iT6U8j/bY/h1vyD05+n7wnnj+RJ9KWR/tsfw635B6c/T94OeP5En0pZH+2x/DrfkHpz9P3g54/kSr9KOSPtsfw635ByT9P3g54/kSfSjkj7bH8Ot+Qck/T94OeP5Ei30sj/bY+xW/IOSfp+8HPH8iVy33yskzeEb2GPLGpH3yih6djnhs9pd06sVOlOM4vRKMlJP0orMY3WzleIAAAAAAAAAAAAAAHP2+huuq3dzO2pzat6UnDgptKpOLwnKetJppLRmx1G7R04iMzux62rMzyw0x26XfSUeTj/sdptEbuEUmVynaReifuGck1w99off9xOUcqzVtnHUEYRLitwIuWGLzKK1yehHPVvyw66WnFpfQtze9hSnTjWyhOcqkkpdii+CoJ50m9fIcI05t1s56vG8s8umz/wBHeSl+4f4ki3o1cPbdXy+Kbs8j9q3dWkouMFJuljnxg86afGZb15Zw9XQ1PUpFmEKuy4lHWwKxjHHO3hxvAmMfFErbIS+qb1+4q2uLada8pSfCnhQ7pxxilneG3jNGlpZjMvN4virUvy0n7txrb2OSprBUpx5Y1Hj7y86NWaOO1Yas1dbnrunOFWVWzrSwafvjJaFJLOmc7Vx0nZv0OIjVjMbugbW4jUhGpB4xnFSi9aksUcJjDYugAAAAAAAAAAABaup8GEnqjJ+pCBylZYtty04tvbnfSeq8veWKlDslSbnLBKTXG9GHFrZhn8Vp5pb4/DEYXsmScajinitK9eHqZfR6WmFNaM1y2Ciot91LgrB4PDHF8Sw5TTMz8IZoxO61J9y/XswJV+DHW0E7m2i+9dxn/wCLjgZ9brasO1ZxpWn6Pt9xfZ3tZp5HicyJO+LcqMqys6lVd1RTXE6ijgtnCzkTFfiRaY2UWQYccbdbKal8Bivg9S3zf8q/oKj/AAvwYjEfKerPzSo8h0eLsPpor4DEfKerPzT/ALef0MlopW8tkYp+qSIxXwn1LfN/tclXnDNKLitCzZsOTDMTiJ2Qv0cocpE1Mta32Kqnk2WOmNWm48mLwfuM+vX8LZwEz62PpL6Vvb1XLJlq3p7El7LaXQZdTul7dNmylFgAAAAAAAAAAARso+CqcyfVZMbonZyxYaXzmeo834rV5k1OXCUuC+PlOF9GLTmHemrMRiXuyslDPji+N6cdpamnFVL6k2bpuP3MQu41JznJKD4KUcMcWscXyf3OXEa86cxEQ66GjGpmZlrmULfsc6tLHhcBuOOs70tzREuF68szDFUMe2bVLFvtieCXOgctTvqv/ht9n2eOTc7dWWGd9ytPpfEa+bw8HON19XNOnmhFR5dL9bHLndSb+EStlN6y0VhXrKJPKD1k4hPLKy8oPWScqn6QesYTyvcMpco5TlSqOVuUiaQnrD25Up8XBeuOb1rQyvJMJi0/Fqm+TTlGwqZ1KPDp90udxriM/E+7b/6fMTrR9pfWN7F/9rtfNvrSMOp3Pcps2gosAAAAAAAAAAACNlLwNTmT6rJjdE7OV7F53tZ6bzfiw93XnUqSXCwUcePDR8THabXtMQ3VrWtYSclXElNwk8WujQX0bWi01lz1qxjmhsNreVaePYqk4YrCTi3HFcp3tWLbwzxaa7SjyXcy2PEshEtXhdWcv402/bS+Bn1Ot6rz7i32fWb6/wC6efjfSb4jD52Iyxla7JXiqJO5IyvFVidwMrRRalchbkeHck5TyKdtFolPI9RvOUsci/SvmuMnCs6bG7uL7hWM44/t0/dIzcZH5Uy08BTGvH2l9n3sPFdr5t9aR5Wp3Pcps2kosAAAAAAAAAAACNlLwVTmT6rJjdE7OUrepwZPHWz1HmfFHu8luUnOlJZ9K/trMt9GZnMNVNaMYlIybkxwblLO3pL6WlydZV1NTm6QySi9R2cVmvWSWGOL48OgIY6lJ9ntW/Ky6Y6PTicNTvq6f4b/AGfUY2Vao24weGL7qXcr0Y6TXfVrWerxKaczCTDc6339aK5qb97OM8R4h2jThc/6aovTWn6onP2m3heK1W6m5Gm+9uGudFPoHtU/GFuWGNvdyN1HPT4FVfceEvZlp9Z0rxNJ36J5PDXLjhQk4TjKElpjJOL9TO8Wz1g5VrsxaJTyqdlLxJyvarF4k5WN3T1sbaS+9HpM/Ge5n9HfhK41Y/V0FvYeK7Xzb60jydTuepTZtJRYAAAAAAAAAAAEDL9fsdtXnhjwaNSWGjHgwbwxLVjMxCLTiHKT0va+k9N5k7gQqgAFQL1pPCvYvVVn10ZtXuq0f4bfZ9Zusp908/Gy2HkQiPKPKVmE4I5Q5SkwnCRTyhylJhKbQyhylJhOUq5VG4jwK9ONSPFj30eWM1ni9gre1esSvF2k7pNyFShF1qDdWis8l+9pr7yXfx+8tHGjbpcRFuk7usYnZqiq8ZqiU4OGdIkwgZfnjQltj0nHi5/Jn9Hbh4/MdGb1c8clWrw/YkvVUkvgeVqdzfTZtZRYAAAAAAAAAAAGK3Vf6K6/29b+nItTuhW3bLliel7X0npw82d5UCFQADECiqfrbX7tSfWi/iZtTvq0R7q32bzXvM72s64eXFUd3hXC/K9RvCJqnCRSuyk1RhOoXZzmqMMlbXZzmFWZsr5p44lVonDUt3O5iKjK7to4R03FJaI46akFq1r0m3Q1s/hs00tzND4ZsiV8IWWZfqXtRy4v3UuuhH43SO9N4ptebU/qzPO1O5rps245rgAAAAAAAAAAAxW6v/RXX+3rf05Fqd0K27ZcsT0va+k9OHmTuoAAAAl5uJd1av79TrozanfVprH5c/Zn61xne00SwRCw7gjC3KRuOLj4tbfJykTBhs+S9zleaUqko0U/rZ5ewtHpM99aI26q4hsVruXo8dxVb5IwS9+czW4i0fCDlr5TVuXX7u4eOqcV0xOftPmCdKJ2lGr2dWi/1kcFxSTxi9jR0i1bbOdqTXdkcn3evOnmaedNPSmuNBFZw+X7tshq0uODDwNVOdvyLHCUNsXm2NHpaOpz167ttbc0ZaplZ/qntXSOJn8qf0dtHvdLb03im15tT+rMwanc002bcc1wAAAAAAAAAAARcqRTo1U1inTninofcsmN0Ts5M+bPUeXO4SgAEJAlYvJf6fklUx9pP4mbU76tNPdyyNWrnZpZIWlNt4LFtvBJcbYS3HIlrC2Sk8JVms8tKh92PLynK8TO7Pa82npsy0MoNvSZrVRhkLa95TPeqWXtbsz2qtEsvQuE1wWk4td0nnTWw5dYda2YjKVh2FqcM9OTwXG4P6rerUa9PU5+k7uOpp8vWNmI3a2HbNhUwWNS3/X0tbUVhVitsG/ZRr0L8t/uvw9uuHxjKUsab2o1cT7tv0u50/vXrDJdrh9R++csTBqdzRTZtJRYAAAAAAAAAAAEbKXganMn1WTG6J2cl69r6T1HlzuEoABCUzJmSq9xJxoUpVGs8sNC2t5kUteK7r1pNtkDLdlUo1KVOrBwmpzbi9T4OD2HG0xN6zDRWs1paJe6kjSyQnZEj3TqP9nvec+P0ItWMuerPTDLO6eJS8KxVJoVzjMGGTtbg42qjDMWlwZr1QzVncme1VolmaWFSMqctElhsfE/Wc6zNZzDrGJjEsPkx4T4E9bhNa0+5kb/AKwzV6WfBMvW3YnVpP8Ad1ZQ9EZNL3YG/XnOln7PW0+tsunN7DxXa+bfWkYdTud6bNpKLAAAAAAAAAAAAjZS8DU5k+qyY3ROzkrXtfSeo8udwIVAoB9g3vIRhYU3HTNzlUet44Z9hg1pzeXo6UYpD57vrSxvqXMXSTT+37yi+1vs16bNzCyFhPCntk/kdadrlfuXo1Ckpwl0apzmESyNtWOVoVZa1rHC1VWatKxlvUZ6wraDharpWUa6eFzPDjkn60jXpdkOWp3vi2+NHC9u0vLY+1GLfSbb/wDrw9TQ2h0VvYeK7Xzb60jJqdzRTZtJRYAAAAAAAAAAAEbKXganMn1WTG6J2cla9r6T1HlzuBCoFAN23v8AdBGmpW1WSim3KjJ5li++g3xa0Zdekz+KGzh7xjllr2+NcxqXdJwkpJLgtp4rFNYrH0+8pWJia/de05izDzNrEk20+5w1PpOtNlLR1XIyImBJpTKYE+3qHO0KSytrUOVoVlmbOqZ7VVbBk2WLRntVau63Uq8O4m1o4SXqSXwO+nXFIhTUnNnxrd/W4d5dyXl2vZSj8DXqe4eroRiK/Z0dvYeK7Xzb60jHqdzRTZtJRYAAAAAAAAAAAEbKXganMn1WTG6J2cla9r6T1HlzuBCoFADISi3i8Dz6nTE4X76tVPd2SpxNMssK0ZYPaTWcEwvHSYUXqTKzAm0JFJhWWUtpHO0KSzNkzhaqmWfpV+xU3N6dEFrk9HzOM0zOFqzjqs5NqqHCqzfc04yqTb1QXCfR7ztNc9IUrGbYfD8p1nNSqS0zk5y2zk5PpO/ERjSx9ntU6Th1LvYeK7Xzb60jBqdzrTZtJRYAAAAAAAAAAAEbKXgqnMn1WTG6J2clvS9r6T1HmW3UCqoFAASjXa8Bz6n/AKGe/fVpp7uyfOJrmGSJeHArhOV2k+J+hl6z5VmPCVCkXwpzJdGkRNUTZlbSiznaHObM3QcKaxm8NS43sRwtDnHV5lcSqyTeZLvY6l8ysVwtMoW7rKHYbPsKfd3LwfJSg05v/lLgx9Zelc2aOEpzX5vH/L5hfd4/QW4r3cvTpu6m3sPFdr5t9aR5+p3OtNm0lFgAAAAAAAAAAAR8o+CqcyfVZMbolyU9L2vpPUeXO6gQqBQCoEe5Weh5yp0wM9/eVaqe7sy9SnnN8wwRK06ZXC+VVTIwL9FNaGOsInEp1GvJcS9Q5pc5rCdSup8Tw2IpMzKnJVIoQbeLxe0phEyzdrCEIyqVHwacFwqktSXxehEYcutpxD5pl/K0rqvKtLMn3NKP1IR71beN8rO1K8sPZ0tONOsVYe+7x7Uc+J91LtTd1NvYeK7Xzb60jztTudabNpKLAAAAAAAAAAAAj5R8FU5k+qyY3RLkp6XtfSeo8ud1AhUCgAC1UWM7dfxJ9MDjPvafdpj3Vvs2Stb53tZ6lqvLrbosuic+VfIqRWapyuQpFeUyk0qJGFZsnW9viRMOdrsxbW8Yxc5yUYRWM5SzKK5fkVmHLM2nEbtK3V7o3ctUqeMaEHjFPM6kvrzXQuLbomtfi9Xh+H9KMz3NfOmGlHv+8e1HLi4/Kn9F6bupt7DxXa+bfWkeXqdzrTZtJRYAAAAAAAAAAAEfKPgqnMn1WTG6JclPS9r6T1HlzuoEKgUAqB4WHZLbHR2WePrgcZnGrT7tGJnRtjw3qpbKWLi01ri8T28ROz5+LzXpZHlaFZq6RqqKz/zApNV/VXKdmU5T1U+3ye3xFJiHO2qsXuW7W3xXC7LU+pTzpP79TRH0YspLtp8Nq6vXaPM//IahlvLVa5a7I0oLvKcc0I+j9p8r1EYepo6FNKPw7+WMaLRDu8l4hKxf949qOHGR+TP6LU3dS72Hiu182+tI8nU7nWmzaSiwAAAAAAAAAAAI+UfBVOZPqsmN0S5K17X0nqPLndQIVAoAA8YY1LZfxZ9MDhb3lWmvurNqrRcZNptPF51mPSmHnRiYxLz+k60f2seck/eTz28o9n0rfAeXaq/Ypv0P5jnsj2PT8ytT3RXH7PAjsjj0lZmzpHBaXxzP6sZe39armqVZyWrHCPsrMV6tOnpadO2sQg8HAnDs8tE4S8tFsJecC8QlYygv1b2oz8bGNCf0Xp3Oo97DxXa+bfWkeNqdzrTZtJRYAAAAAAAAAAAEfKPgqnMn1WTG6Jck/N9J6jy53AhUCgAD3aYdntMWkuzSxbeCWeHGzhefzKtHX0bY8PouV8ktNtcuGzkPViYl4unqtcubVriJ5Wut4QKlMrNXaJRpxIw6QsyQwvC1JFsLQ8smIS8YF4osqqZ0rQys5UhhSe1Gf+oVxw8/eFtOfxOnd7DxXa+bfWkfP6nc702bSUWAAAAAAAAAAABHyj4KpzJ9VkxuiXJOva+k9R5c7gQqBQABEygs1Hn1M3sGbU76tuj2yzeSd01xb9zGXZKfk6mdLmy0x6DdEzWWbV4XT1OsxifMNgobpbStmnjRl97PH0SXxNFNaPix24TVp29YXKthGaxpyjNPji0+jOaK4tsrF5r0tGGNuLBriwLem711IlCqWr1D03WLLErcn014s8drv/P8/wAzF4008yzUcY6ZLpEzp07pWiJlYldfVXpfyOFuJ+FI/WV+XyhZQxcG28c6MHGxM6M2tPh0pu6l3sfFdr5t9aR5Gp3OtNm0FFgAAAAAAAAAAAeK0MYta0160ByPXoOnOdOXfQnKEtsJOL96PUicxl5doxOHglVUCgACJlDvYS+rUeP/ACSfwZm1elqy2aHWJh6kbx4kiMLPMW1obT1p4dAwTETulwytcR0VqmxvHpLxq3jaZUnR05/thX9MXHlP/GPyL+0avn/UI9DT8PEspV3+8foSQ9o1fP8AqE+lSPgsyqTlplJ7WyvNe28ytERG0EaZNdNOV+FM0001ZlZyosIJccmkjP8A1HFdHHxmVtPudT731q6WTrWElg+wxbWrhd1h7zwr90u1dmwlFgAAAAAAAAAAAAPkW+fvb1atWV5ZRUnPPXpZk3JLv4cTb416dunR1oiMWZ9bR5usbvklza1KcnGpTlCS0xkmn6ma4mJ2Y5rMbrPoJRgBiQGJeJxTTUk3F5pfBrlRS9Mxh107TWURUakc0cKkeLBrFbVpKU1NSkYxmGnNZ67PGNTyMvUy3tM/InFfKmNTyM/VL5E+0T8kmI8mNTyM/VL5Ee0T8hiPJjU8jP1S+RPtE/JJiPKqlU8jP1S+RMcTMf2GI8vSq1PIz9T+ReOMn5JRiPL2rmfkZep/I6Rx8x/jRyx5XaVerJ4QoSbehZ/drLf+StG2mjkr5fQt77euubmtC5v4OnRi0405ZpTwz4cHiR5uvxF9S3Neevw8Q61r0xGzoKMUlgtC0GV0VAAAAAAAAAAAAAAAt1beEu+hF7Un0gW+0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXkoezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AO0aXk4ezH5AeoWtOLxUIp61FIC8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k='
        },
        {
            name: 'Apple TV',
            cost: '1200$',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41LpF5n38kL._AC_SX522_.jpg'
        },
        {
            name: 'Tv',
            cost: '1200$',
            image: 'https://m.media-amazon.com/images/S/aplus-media/sc/b115788d-9693-4419-8ad7-7768b2af20fe.__CR0,0,970,600_PT0_SX970_V1___.jpg'
        },
        {
            name: 'Speaker',
            cost: '150$',
            image: 'data:image/jpeg;base64,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'
        },
        {
            name: 'Acer Aspire',
            cost: '330$',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71HaIH7W5gL._AC_SX466_.jpg'
        },
        {
            name: 'Dji Drone',
            cost: '1500$',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51We5oIVy-L._AC_SY355_.jpg'
        }
    ])

    const addToCart = (product) => {
        setCart([...cart, { ...product }]);
        alert("Product added to cart");
    }

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        )
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }

    const renderProducts = () => (
        <div className="products">
            <section className="products">
                <Container>
                        <Row>
                            {products.map((product) => (
                                <Col md="4">
                                    <Card className="rounded-0 border-0">
                                        <CardHeader className="border-0">
                                            <h3>{product.name}</h3>
                                            <p>{product.cost}</p>
                                        </CardHeader>
                                        <CardBody className="text-center h-100">
                                            <img 
                                                src={product.image} 
                                                className="w-75" 
                                                alt={product.name} 
                                            />
                                            <button 
                                                onClick={() => addToCart(product)}
                                                className="mt-5"
                                            >
                                                Add to card
                                            </button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                </Container>
            </section>
        </div>
    );

    const renderCart = () => (
        <div className="cart">
            <section className="products">
                <Container>
                    <Row>
                        {cart.map((product) => (
                                <Col md="4">
                                    <Card className="rounded-0 border-0">
                                        <CardHeader className="border-0">
                                            <h3>{product.name}</h3>
                                            <p>{product.cost}</p>
                                        </CardHeader>
                                        <CardBody className="text-center h-100">
                                            <img 
                                                src={product.image} 
                                                className="w-75" 
                                                alt={product.name} 
                                            />
                                            <button 
                                                onClick={() => removeFromCart(product)} 
                                                className="mt-3">
                                                    Remove
                                            </button>
                                        </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );

    return (
        <div className="General">
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/">
                        <img src={logo} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <div className="searchSection d-flex">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">Search</button>
                    </div>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <button className="shopButton" onClick={() => navigateTo(PAGE_PRODUCTS)}>
                                <HomeIcon
                                    className="icon" 
                                />
                            </button>
                        </NavItem>
                        <NavItem>
                            <button className="shopButton" onClick={() => navigateTo(PAGE_CART)}>
                                <ShoppingCartIcon 
                                    className="icon" 
                                />
                                ({cart.length})
                            </button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <section className="home"></section>
            <div className="navigation">
                {page === PAGE_PRODUCTS && renderProducts()}
                {page === PAGE_CART && renderCart()}
            </div>
        </div>
    );
}

export default General;