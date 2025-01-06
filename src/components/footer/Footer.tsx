import { footerLinks } from "@/config/mockups/footerLinks";
import { Location, MailIcon, PhoneIcon } from "@/images/icons";
import Logo from "@/images/logos/Logo.svg";
import { Box, Link, Typography, useTheme } from "@mui/material";
const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        padding: { xs: "1rem 2rem", md: "4rem 8rem" },
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1fr 1fr 1fr" },
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <img
            src={Logo}
            style={{
              width: "200px",
              height: "auto",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.contrastText,
              textAlign: "justify",
            }}
          >
            Priorytetem naszego sklepu jest szybkość, dostępność i niezawodność.
            Oferujemy szeroki asortyment części zamiennych dla wielu marek i
            modeli aut, zarówno dla samochodów osobowych, jak i dostawczych.
            Niezależnie od tego, czy potrzebujesz oryginalnych części, czy
            tańszych zamienników, u nas znajdziesz rozwiązanie dopasowane do
            każdego budżetu. Dzięki naszym rozbudowanym magazynom i sprawnej
            logistyce gwarantujemy błyskawiczną dostawę, aby Twój samochód jak
            najszybciej wrócił na drogę.
          </Typography>
        </Box>
        {footerLinks.map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: "1rem",
              }}
            >
              {group.title}
            </Typography>
            {group.links.map((link, linkIndex) => (
              <Link key={linkIndex} variant="body2" href={link.url}>
                {link.title}
              </Link>
            ))}
          </Box>
        ))}
        <Box
          sx={{
            color: theme.palette.primary.contrastText,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: "1rem",
            }}
          >
            Informacje kontaktowe
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <PhoneIcon
              style={{
                color: theme.palette.primary.main,
              }}
              width={24}
              height={24}
            />
            123 456 789
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <MailIcon
              style={{
                color: theme.palette.primary.main,
              }}
              width={24}
              height={24}
            />
            <a
              href="mailto:kontakt@auto-komplet.pl"
              style={{
                textDecoration: "none",
                color: theme.palette.primary.contrastText,
              }}
            >
              kontakt@auto-komplet.pl
            </a>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Location
              style={{
                color: theme.palette.primary.main,
              }}
              width={24}
              height={24}
            />
            ul. Piastowska 20, 10-024 Olsztyn
          </Typography>
        </Box>
      </Box>
      <Box
        component={"hr"}
        sx={{
          border: 0,
          borderTop: "1px solid",
          borderColor: theme.palette.primary.main,
          width: "80%",
        }}
      />
    </Box>
  );
};

export default Footer;
