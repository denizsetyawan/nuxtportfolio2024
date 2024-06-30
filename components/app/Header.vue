<template>
    <Navbar expand="lg" margin="y-5">
        <Container>
            <NavbarBrand>Deniz <br> Setyawan.</NavbarBrand>
            <NavbarToggler />
            <NavbarCollapse>
                <NavbarNav margin="s-auto">
                    <NavLink active>
                        Home
                    </NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Works</NavLink>
                    <NavLink>
                        Contact
                    </NavLink>
                </NavbarNav>
            </NavbarCollapse>
        </Container>
    </Navbar>
</template>

<style scoped>
.navbar-brand {
    font-weight: 500;
}

.nav-link {
    font-size: 1.2rem;
    color: #c4c4c4;
    font-weight: 500;
}

.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
    text-decoration: underline;
}
</style>