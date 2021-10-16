import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Text } from "../elements";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

const Species = ({ species, getSpecies, origin }) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const [target, setTarget] = useState("종족");

    const onClick = () => setIsActive(!isActive);
    const choose = (e) => {
        let target = e.target.innerText;
        switch (target) {
            case "저그":
                getSpecies(0);
                setTarget(target);
                break;
            case "테란":
                getSpecies(1);
                setTarget(target);
                break;
            case "프로토스":
                getSpecies(2);
                setTarget(target);
                break;
            default:
                getSpecies("");
                setTarget(target);
        }
        setIsActive(false);
    };

    return (
        <MenuWrapper>
            <MenuContainer>
                <TriggerBtn onClick={onClick} className="menu-trigger">
                    <Text bold margin="0" color="#fff">
                        {target}
                    </Text>
                </TriggerBtn>
                <Menu ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                    <ul>
                        <li onClick={choose}>
                            <Text margin="0">저그</Text>
                        </li>
                        <li onClick={choose}>
                            <Text margin="0">테란</Text>
                        </li>
                        <li onClick={choose}>
                            <Text margin="0">프로토스</Text>
                        </li>
                    </ul>
                </Menu>
            </MenuContainer>
        </MenuWrapper>
    );
};

const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
`;

const MenuContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.device.desktop} {
        & button {
            width: 250px;
        }
        & p {
            font-size: 15px;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        & button {
            width: 200px;
        }
        & p {
            font-size: 13px;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        & button {
            width: 150px;
        }
        & p {
            font-size: 10px;
        }
    }
`;

const TriggerBtn = styled.button`
    background-color: #37a2ff;
    color: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border: none;
    transition: box-shadow 0.4s ease;
    margin-left: auto;
    width: 300px;

    &:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    }
`;

const Menu = styled.nav`
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    & ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    & li {
        border-bottom: 1px solid #dddddd;
        text-decoration: none;
        padding: 15px 20px;
        display: block;
        cursor: pointer;
    }
`;

export default Species;
