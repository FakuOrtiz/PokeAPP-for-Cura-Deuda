import styles from "../components/card/Card.module.css"

export const typeColor = (types) => {
    if (types?.includes("fire") || types?.includes("dragon")) return styles.containerFire
    if (types?.includes("water") || types?.includes("ice")) return styles.containerWater
    if (types?.includes("grass")) return styles.containerGrass
    if (types?.includes("electric")) return styles.containerElectric
    if (types?.includes("bug")) return styles.containerBug
    if (types?.includes("normal")) return styles.containerNormal
    if (types?.includes("poison")) return styles.containerPoison
    if (types?.includes("ground")) return styles.containerGround
    if (types?.includes("fighting")) return styles.containerFighting
    if (types?.includes("psychic")) return styles.containerPsychic
    return styles.containerNormal;
  };