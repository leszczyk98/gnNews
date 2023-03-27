import { ReactElement } from "react";
import { Countries } from "../../types/Countries";
import { ReactComponent as Ar } from "../../assets/flags/ar.svg";
import { ReactComponent as At } from "../../assets/flags/at.svg";
import { ReactComponent as Au } from "../../assets/flags/au.svg";
import { ReactComponent as Be } from "../../assets/flags/be.svg";
import { ReactComponent as Bg } from "../../assets/flags/bg.svg";
import { ReactComponent as Br } from "../../assets/flags/br.svg";
import { ReactComponent as Ca } from "../../assets/flags/ca.svg";
import { ReactComponent as Ch } from "../../assets/flags/ch.svg";
import { ReactComponent as Cn } from "../../assets/flags/cn.svg";
import { ReactComponent as Co } from "../../assets/flags/co.svg";
import { ReactComponent as Cu } from "../../assets/flags/cu.svg";
import { ReactComponent as Cz } from "../../assets/flags/cz.svg";
import { ReactComponent as De } from "../../assets/flags/de.svg";
import { ReactComponent as Eg } from "../../assets/flags/eg.svg";
import { ReactComponent as Fr } from "../../assets/flags/fr.svg";
import { ReactComponent as Gb } from "../../assets/flags/gb.svg";
import { ReactComponent as Us } from "../../assets/flags/us.svg";
import { ReactComponent as Pl } from "../../assets/flags/pl.svg";

export const flagMap: Record<Countries,  ReactElement> = {
    argentina: <Ar />,
    australia: <At />,
    austria: <Au />,
    belgium: <Be />,
    brazil: <Br />,
    bulgaria: <Bg />,
    canada: <Ca />,
    china: <Cn />,
    colombia: <Co />,
    cuba: <Cu />,
    czechRepublic: <Cz />,
    egypt: <Eg />,
    france: <Fr />,
    germany: <De />,
    poland: <Pl />,
    switzerland: <Ch />,
    unitedKingdom: <Gb />,
    unitedStates: <Us />
}