import React, { useEffect, useState } from "react";
import styles from "./CompanyINN.module.scss";
import validateINN from "../../../utils/validateINN";

const CompanyINN = ({ companyINN, setCompanyINN }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (companyINN) {
      const errorMessage = validateINN(companyINN);
      setError(errorMessage);
    }
  }, [companyINN]);

  return (
    <div className={`${styles.formField} ${styles.formFieldInputs}`}>
      <label htmlFor="companyINN">
        ИНН компании
        <span
          className={
            error
              ? `${styles.requiredAsterisk} ${styles.error}`
              : styles.requiredAsterisk
          }
        >
          *
        </span>
      </label>
      <input
        type="text"
        id="companyINN"
        name="companyINN"
        className={error ? styles.inputError : ""}
        value={companyINN}
        onChange={(e) => {
          setCompanyINN(e.target.value);
          setError("");
        }}
        onBlur={() => setError(validateINN(companyINN))}
        placeholder="10 цифр"
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default CompanyINN;
