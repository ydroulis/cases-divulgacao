import Footer from '../../components/patterns/Footer'
import Head from 'next/head'
import Link from '../../components/Link'
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';

const LOGO_ALURA_URL = '/images/alura-logo.svg';
const SIDE_IMAGE_URL = '/images/alura-cases.png'

function SideImage() {
  return (
    <Box
      stylesheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: 'auto'
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        }
      }}
    >
      <Box
        stylesheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: 'relative',
            lg: 'absolute',
          }
        }}
      >
        <Box 
          stylesheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none'
            },
            position: 'relative',
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: 'auto',
            },
          }}
        >
          <Image
            stylesheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: {
                lg: "auto",
              },
              height: {
                lg: theme.space["x1/1"],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt="Treinamento com a roberta arcoverde no alura cases, falando sobre o stackoverflow"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default function HomeScreen() {
  return (
    <Box>
      <Head>
        <title>Home - Alura Cases Campanha</title>
      </Head>
      <Box
        as="main"
        stylesheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral["050"],
        }}
      >
        <Box
          stylesheet={{
            overflow: 'hidden',
            position: {
              lg: 'relative',
            },
            paddingTop: {
              xs: theme.space.x6,
              sm: theme.space.x12,
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x24,
            },
          }}
        >
          <Box
            stylesheet={{
              marginHorizontal: 'auto',
              paddingHorizontal: {
                xs: theme.space.x4,
                sm: theme.space.x6,
                lg: theme.space.x8,
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg,
              },
              display: {
                lg: "grid",
              },
              gap: {
                lg: theme.space.x24,
              },
              gridTemplateColumns: {
                lg: "repeat(2, minmax(0, 1fr))",
              }
            }}
          >
            <Box>
              <Box>
                <Image
                  stylesheet={{
                    width: "auto",
                    height: theme.space.x11,
                  }}
                  src={LOGO_ALURA_URL}
                  alt="Logo Alura"
                />
              </Box>
              <Box
                stylesheet={{
                  marginTop: {
                    xs: theme.space.x16,
                    sm: theme.space.x20,
                  },
                }}
              >
                <Box>
                  <Link
                    href="/faq"
                    stylesheet={{
                      display: "inline-flex",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                    }}
                  >
                    <Text
                      stylesheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      O que tem de novo?
                    </Text>
                    <Text
                      stylesheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        display: 'inline-flex',
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        alignItems: 'center',
                      }}
                    >
                      <Text>Confira as principais dúvidas</Text>
                      <Icon
                        stylesheet={{
                          iconVariant: 'chevronRight',
                          marginLeft: theme.space.xpx,
                        }}
                        style={{ width: '24px', height: '24px'}}
                        aria-hidden="true"
                      />
                    </Text>
                  </Link>
                </Box>
                <Box
                  stylesheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                  }}
                >
                  <Text
                    as="h1"
                    stylesheet={{
                      textVariant: theme.typography.variants.heading1,
                      color: theme.colors.neutral["900"],
                    }}
                  >
                    Alura Cases
                  </Text>
                  <Text
                    as="p"
                    stylesheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre arquitetura e design de sistemas. Aprenda através das descobertas que as principais empresas de tecnologia enfrentam!
                  </Text>
                  <Text
                    as="p"
                    stylesheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    Quer testar antes de todo mundo?
                  </Text>
                </Box>
                <Box
                  as="form"
                  action="#"
                  stylesheet={{
                    display: {
                      sm: 'flex',
                    },
                    marginTop: theme.space.x12,
                    width: {
                      sm: theme.space['x1/1'],
                    },
                    maxWidth: {
                      sm: theme.space.xcontainer_lg,
                    }
                  }}
                >
                  <Box
                    stylesheet={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <Text
                      as="label"
                      htmlFor="email"
                      stylesheet={{
                        srOnly: true,
                      }}
                    >
                      Email address
                    </Text>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Coloque seu email aqui"
                    />
                  </Box>
                  <Box 
                    stylesheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0,
                      },
                      marginLeft: {
                        sm: theme.space.x3,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      // button variant
                    >
                      Cadastrar
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <SideImage />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}