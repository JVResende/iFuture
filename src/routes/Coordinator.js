export const goToHomepage = (navigate) => {
    navigate("/")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToAddressPage = (navigate) => {
    navigate("/address")
}

export const goToDetailPage = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goToSignupPage = (navigate) => {
    navigate("/signup")
}

export const goToCartPage = (navigate) => {
    navigate("/cart")
}

export const goToProfilePage = (navigate) => {
    navigate("/profile")
}

export const goToEditAddressPage = (navigate) => {
    navigate("/edit-address")
}

export const goToEditUserPage = (navigate) => {
    navigate("/edit-user")
}

export const goBack = (navigate) => {
    navigate(-1)
}