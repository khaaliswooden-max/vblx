# Security Policy

Visionblox LLC takes security seriously. This document outlines our security policies, supported versions, and vulnerability reporting procedures.

## Our Commitment

As a company serving federal agencies, defense contractors, and regulated industries, we maintain rigorous security standards aligned with:

- **NIST Cybersecurity Framework**
- **NIST SP 800-53** (Security Controls)
- **FedRAMP** Requirements
- **SOC 2 Type II** Controls

---

## Supported Versions

| Version | Supported | Notes |
|---------|-----------|-------|
| 2.x.x   | ✅ Yes    | Current release, actively maintained |
| 1.x.x   | ⚠️ Limited | Security patches only |
| < 1.0   | ❌ No     | End of life |

We recommend always running the latest version to ensure you have the most recent security updates.

---

## Reporting a Vulnerability

### ⚠️ Do NOT Create Public Issues

If you discover a security vulnerability, **please do not** create a public GitHub issue. This could expose the vulnerability before a fix is available.

### Reporting Process

**1. Email our security team:**

```
security@visionblox.com
```

**2. Include the following information:**

- **Description**: Clear description of the vulnerability
- **Impact**: Potential impact and severity assessment
- **Reproduction**: Step-by-step instructions to reproduce
- **Environment**: Version, browser, OS, configuration
- **Proof of Concept**: Screenshots, logs, or code (if applicable)
- **Remediation**: Suggested fix (if known)

**3. Use this template:**

```
Subject: [SECURITY] Brief description of vulnerability

## Vulnerability Report

**Reporter**: Your name / handle
**Date**: YYYY-MM-DD
**Severity**: Critical / High / Medium / Low

## Description
[Clear description of the security issue]

## Affected Components
- Component/file name
- Version affected

## Steps to Reproduce
1. Step one
2. Step two
3. ...

## Impact
[What could an attacker do with this vulnerability?]

## Suggested Remediation
[If you have recommendations for fixing]

## Additional Information
[Any other relevant details]
```

### Alternative Contact

If email is not suitable, contact directly:

**Khaalis Wooden**  
Director of Enterprise Capture & Compliance  
Phone: +1 (210) 429-4227  

---

## Response Timeline

| Stage | Timeframe |
|-------|-----------|
| Acknowledgment | Within 24 hours |
| Initial Assessment | Within 72 hours |
| Status Update | Within 7 days |
| Resolution Target | Within 30 days (critical), 90 days (other) |

### What to Expect

1. **Acknowledgment** — We'll confirm receipt and assign a tracking ID
2. **Triage** — Our team assesses severity and impact
3. **Investigation** — We investigate and develop a fix
4. **Resolution** — Patch developed, tested, and deployed
5. **Disclosure** — Coordinated disclosure after fix is available
6. **Recognition** — Credit in security advisories (if desired)

---

## Severity Classification

We use CVSS v3.1 for severity scoring:

| Severity | CVSS Score | Response Time |
|----------|------------|---------------|
| **Critical** | 9.0 - 10.0 | 24-48 hours |
| **High** | 7.0 - 8.9 | 7 days |
| **Medium** | 4.0 - 6.9 | 30 days |
| **Low** | 0.1 - 3.9 | 90 days |

---

## Scope

### In Scope

- vblx repository code (this repo)
- Visionblox web applications
- API endpoints
- Authentication/authorization
- Data handling and storage
- Third-party integrations we control

### Out of Scope

- Third-party services (report to respective vendors)
- Social engineering attacks
- Physical security
- Denial of service (DoS/DDoS)
- Issues requiring physical access
- Issues in dependencies (report upstream, notify us)

---

## Security Best Practices

### For Contributors

- Never commit secrets, API keys, or credentials
- Use `.env.local` for sensitive configuration
- Review dependencies before adding (`npm audit`)
- Follow secure coding guidelines
- Enable 2FA on your GitHub account

### Environment Variables

Sensitive data must be stored in environment variables:

```bash
# ❌ Never commit
const API_KEY = "sk-1234567890abcdef"

# ✅ Use environment variables
const API_KEY = process.env.API_KEY
```

### Dependencies

- Run `npm audit` regularly
- Update dependencies promptly
- Review changelogs for security fixes
- Use `npm audit fix` for automatic remediation

---

## Security Features

### Built-in Protections

| Feature | Implementation |
|---------|----------------|
| XSS Prevention | React's automatic escaping |
| CSRF Protection | Next.js built-in |
| Content Security Policy | Configured in `next.config.js` |
| Secure Headers | Vercel automatic headers |
| HTTPS Only | Enforced at platform level |
| Input Validation | Zod schema validation |

### Authentication (Planned)

- OAuth 2.0 / OIDC
- Multi-factor authentication
- Session management
- Role-based access control

---

## Compliance

This project is developed with consideration for:

| Standard | Status |
|----------|--------|
| FedRAMP Moderate | Architecture aligned |
| NIST 800-53 | Controls implemented |
| SOC 2 Type II | Practices followed |
| WCAG 2.1 AA | Accessibility compliant |
| Section 508 | Federal accessibility |

---

## Security Advisories

Published security advisories will be posted to:

- GitHub Security Advisories (this repo)
- Visionblox security page (when available)
- Direct notification to affected users

---

## Recognition

We appreciate security researchers who help keep Visionblox secure. With your permission, we will:

- Credit you in security advisories
- Add you to our Security Hall of Fame
- Provide a letter of recognition (upon request)

---

## Legal

### Safe Harbor

Visionblox LLC supports responsible security research. We will not pursue legal action against researchers who:

- Act in good faith
- Avoid privacy violations
- Avoid data destruction
- Do not exploit vulnerabilities beyond proof of concept
- Report findings promptly and confidentially

### Confidentiality

Please keep vulnerability information confidential until:

- A fix has been deployed
- We have coordinated disclosure timing
- 90 days have passed (whichever comes first)

---

## Contact

**Security Team**  
Email: security@visionblox.com

**Direct Contact**  
Khaalis Wooden  
khaalis.wooden@visionblox.com  
+1 (210) 429-4227

---

*Last updated: December 2025*

© 2025 Visionblox LLC. All Rights Reserved.
