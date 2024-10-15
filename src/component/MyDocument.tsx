import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
  },
  section: {
    flexGrow: 1,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logo: {
    fontSize: 14,
  },
  invoice: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    fontSize: 10,
    fontWeight: "normal",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    fontSize: 10,
    fontWeight: "normal",
    color: "blue",
  },
  headText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

const MyDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.main}>
      <View style={styles.page}>
        <View style={styles.head}>
          <Text style={styles.logo}>Systone</Text>
          <Text style={styles.invoice}>Invoice</Text>
        </View>
        <View style={styles.head}>
          <View style={styles.section}>
            <Text style={styles.headText}>Payable to:</Text>
            <Text style={styles.text}>Blizz inc</Text>
            <Text style={styles.link}>e.bliss.systoneit.com</Text>
            <Text style={styles.text}>undefined, undefined</Text>
            <Text style={styles.text}>undefined</Text>
            <Text style={styles.text}>undefined, undefined</Text>
            <Text style={styles.text}>PHONE: 8163985830</Text>
            <Text style={styles.text}>TIN: 234567890</Text>
            <Text style={styles.text}>DUNS: 2345678</Text>
            <Text style={styles.text}>UEI#: 23456789</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.headText}>Bill to:</Text>
            <Text style={styles.text}>testCompany</Text>
            <Text style={styles.link}>test@email.com</Text>
            <Text style={styles.text}>hey2, man,</Text>
            <Text style={styles.text}>richmond,</Text>
            <Text style={styles.text}>va 2345</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.headText}>Invoice Details:</Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Invoice No: </Text>
              <Text style={styles.text}>TES-COSMICPROJECT-01-1014</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Invoice Date: </Text>
              <Text style={styles.text}>10/02/2024</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Due Date: </Text>
              <Text style={styles.text}>10/30/2024</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Place of Performance: </Text>
              <Text style={styles.text}>Georgia</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Contract POP: </Text>
              <Text style={styles.text}>10/14/2024 to 10/30/2024</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.headText}>Service Date: </Text>
              <Text style={styles.text}>10/01/2024 to 10/29/2024</Text>
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
