"use client";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  Chip,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Searcher } from "@/app/components/ui/Searcher";
import { QuickNavigation } from "@/app/components/ui/QuickNavigation";

const faqsData = [
  {
    id: 1,
    category: "General",
    question: "¿Qué es ZUNSteps?",
    answer:
      "ZUNSteps es una herramienta integral diseñada para facilitar el trabajo con la Suite ZUN. Proporciona tutoriales, scripts, documentación y un asistente de IA para ayudarte a sacar el máximo provecho del sistema.",
  },
  {
    id: 2,
    category: "General",
    question: "¿Cómo accedo a ZUNSteps?",
    answer:
      "Puedes acceder a ZUNSteps desde la página principal haciendo clic en el botón 'Iniciar'. Si eres usuario premium, también puedes acceder a funciones exclusivas desde la sección Premium.",
  },
  {
    id: 3,
    category: "Modules",
    question: "¿Qué módulos están disponibles?",
    answer:
      "ZUNSteps incluye varios módulos como: ZUNACC (Contabilidad), ZUNAFT (Administración Financiera), ZUNHR (Recursos Humanos) y ZUNST (Ventas y Servicios). Cada módulo contiene tutoriales y documentación específica.",
  },
  {
    id: 4,
    category: "Modules",
    question: "¿Cómo uso el módulo ZUNACC?",
    answer:
      "El módulo ZUNACC te permite gestionar la contabilidad de tu empresa. Accede desde el Dashboard y sigue los tutoriales paso a paso para crear registros, generar estados financieros y más.",
  },
  {
    id: 5,
    category: "Chatbot",
    question: "¿Cómo funciona el chatbot?",
    answer:
      "El chatbot es tu asistente personal que responde preguntas sobre cualquier aspecto de ZUNSteps. Simplemente escribe tu pregunta en el chat y el asistente buscará la respuesta más relevante en la base de conocimientos del sistema.",
  },
  {
    id: 6,
    category: "Chatbot",
    question: "¿Qué tipo de preguntas puedo hacer al chatbot?",
    answer:
      "Puedes hacer preguntas sobre cómo usar cualquier módulo, funcionalidades específicas, resolución de problemas, mejores prácticas y más. El chatbot está entrenado con toda la documentación del sistema.",
  },
  {
    id: 7,
    category: "Premium",
    question: "¿Qué beneficios tiene la membresía Premium?",
    answer:
      "La membresía Premium te da acceso a contenido exclusivo, tutoriales avanzados, soporte prioritario y características adicionales que potencian tu productividad con la Suite ZUN.",
  },
  {
    id: 8,
    category: "Premium",
    question: "¿Cómo me suscribo a Premium?",
    answer:
      "Puedes suscribirte a Premium desde la sección Premium en el Dashboard. Selecciona el plan que mejor se adapte a tus necesidades y sigue los pasos de registro.",
  },
  {
    id: 9,
    category: "Troubleshooting",
    question: "¿Qué debo hacer si encuentro un error?",
    answer:
      "Si encuentras un error, intenta lo siguiente: 1) Recarga la página, 2) Limpia el caché del navegador, 3) Intenta en otro navegador, 4) Contacta a soporte si el problema persiste.",
  },
  {
    id: 10,
    category: "Troubleshooting",
    question: "¿Cómo puedo contactar al equipo de soporte?",
    answer:
      "Puedes contactar al equipo de soporte a través del botón de WhatsApp en la página principal (+53 63907157) o enviando un correo a nuestro equipo de atención al cliente.",
  },
];

const categories = [...new Set(faqsData.map((faq) => faq.category))];

export default function FAQsPage() {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(56,142,60,0.05) 100%)",
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <QuickNavigation faqs={false} />
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <HelpOutlineIcon
              sx={{
                fontSize: { xs: 32, md: 40 },
                color: "primary.main",
                mr: 1,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              Preguntas Frecuentes
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}
          >
            Encuentra respuestas a preguntas comunes sobre ZUNSteps y la Suite
            ZUN
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 4 }}>
          <Searcher
            collection={faqsData}
            searchFunction={(term) => setSearchTerm(term)}
            resetFunction={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          />
        </Box>

        {/* Category Filter */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            px: { xs: 1, md: 0 },
          }}
        >
          <Chip
            label="Todos"
            onClick={() => setSelectedCategory("All")}
            color={selectedCategory === "All" ? "primary" : "default"}
            variant={selectedCategory === "All" ? "filled" : "outlined"}
            sx={{
              cursor: "pointer",
              fontSize: { xs: "0.85rem", md: "1rem" },
              px: { xs: 1, md: 2 },
            }}
          />
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? "primary" : "default"}
              variant={selectedCategory === category ? "filled" : "outlined"}
              sx={{
                cursor: "pointer",
                fontSize: { xs: "0.85rem", md: "1rem" },
                px: { xs: 1, md: 2 },
              }}
            />
          ))}
        </Box>

        {/* FAQs List */}
        <Box>
          {filteredFaqs.length > 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {filteredFaqs.map((faq) => (
                <Card
                  key={faq.id}
                  sx={{
                    boxShadow: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 3,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Accordion
                    expanded={expanded === `panel${faq.id}`}
                    onChange={handleChange(`panel${faq.id}`)}
                    sx={{
                      backgroundColor: "transparent",
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${faq.id}-content`}
                      id={`panel${faq.id}-header`}
                      sx={{
                        py: { xs: 1.5, md: 2 },
                        px: { xs: 2, md: 3 },
                        "& .MuiAccordionSummary-content": {
                          my: 0,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          width: "100%",
                        }}
                      >
                        <Chip
                          label={faq.category}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: { xs: "0.95rem", md: "1.1rem" },
                            fontWeight: 600,
                            color: "primary.main",
                            flexGrow: 1,
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        py: { xs: 2, md: 2.5 },
                        px: { xs: 2, md: 3 },
                        backgroundColor: "rgba(25, 118, 210, 0.02)",
                        borderTop: "1px solid #e0e0e0",
                      }}
                    >
                      <Typography
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              ))}
            </Box>
          ) : (
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                textAlign: "center",
                boxShadow: 1,
              }}
            >
              <SearchIcon
                sx={{ fontSize: 48, color: "text.secondary", mb: 2 }}
              />
              <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                No se encontraron resultados
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Intenta con otros términos de búsqueda o selecciona una
                categoría diferente.
              </Typography>
            </Card>
          )}
        </Box>

        {/* Help Box */}
        <Card
          sx={{
            mt: 4,
            p: { xs: 2.5, md: 3 },
            backgroundColor: "rgba(25, 118, 210, 0.05)",
            border: "1px solid #1976d2",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "primary.main", fontWeight: "bold" }}
          >
            ¿No encontraste lo que buscas?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Si no encuentras la respuesta a tu pregunta en estas FAQs, puedes:
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 0 }}>
            <Typography
              component="li"
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              Usar el chatbot en el Dashboard para preguntas específicas
            </Typography>
            <Typography
              component="li"
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              Revisar la documentación completa en el módulo correspondiente
            </Typography>
            <Typography component="li" variant="body2" color="text.secondary">
              Contactar al equipo de soporte por WhatsApp: +53 63907157
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
